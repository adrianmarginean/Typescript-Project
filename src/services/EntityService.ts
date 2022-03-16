import { HasId } from "../models/HasId";
import { EntityOperations } from "./EntityOperations";
import * as fs from 'fs';

export abstract class EntityService<T extends HasId> implements EntityOperations<T>{
    items: T[] = [];

    constructor(){
        this.items = JSON.parse(fs.readFileSync(this.getFileName(), 'utf-8'))
    }

    abstract getFileName(): string;

    /*Find the max id from the entities list*/
    private findMaxId(){
        let maxId = 0;
        this.items.forEach(item => {
            if(item.id !== undefined && item.id > maxId){
                maxId = item.id
            }
        });
        return maxId;

    }

    /*Get all the entities*/
    async getAll(): Promise<T[]> {
        //Return  the items array
        return this.items;
    }

    /*Get the entity with the specific id*/
    async getById(id: number): Promise<T> {
        let entity = this.items.find(item => item.id === id)
        if(entity != undefined){
            //Return the entity with this id
            return entity // ask this => <T>Object.assign({}, entity);
        }else{
            throw new Error(`Cannot find entity with ID: ${id}`);
        }
    }

    /*Adding a new entity to the entities list*/
    async add(entity: T): Promise<T> {
      if(entity.id === undefined){
          entity.id = this.findMaxId() + 1;
      }
      //Add the new entity in the list
      this.items.push(entity);
      let data = JSON.stringify(this.items, null, 2);
      fs.writeFileSync(this.getFileName(), data);
      return entity;
    }

    /*Update an entity*/
    async update(entity: T): Promise<T> {
        let current = this.items.find(item => item.id == entity.id);
        if(current !== undefined){
            //Update the entity
            Object.assign(current,entity);
            return current;
        } else {
            throw new Error(`Cannot update the  entity with ID: ${entity.id}`);
        }
    }

    /* Delete one entity with the specific id*/
    async delete(id: number): Promise<boolean> {
        let index = this.items.findIndex(item => item.id === id);
        if(index != -1){
            this.items.splice(index,1);
            let data = JSON.stringify(this.items, null, 2);
            fs.writeFileSync(this.getFileName(), data);
            return true;
        }else{
            //throw new Error(`Cannot delete entity with invalid ID: ${id}`);
            console.log(`Cannot delete entity with invalid ID: ${id}`);
            return false;
        }
    }

    /*This functions delets many entities*/
    async deleteMany(ids: number[]):Promise<boolean>{
        for(let id of ids){
           if(await this.delete(id) == false){
                return false;
           }
        }
        return true;
    }


}