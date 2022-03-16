"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityService = void 0;
const fs = __importStar(require("fs"));
class EntityService {
    constructor() {
        this.items = [];
        this.items = JSON.parse(fs.readFileSync(this.getFileName(), 'utf-8'));
    }
    /*Find the max id from the entities list*/
    findMaxId() {
        let maxId = 0;
        this.items.forEach(item => {
            if (item.id !== undefined && item.id > maxId) {
                maxId = item.id;
            }
        });
        return maxId;
    }
    /*Get all the entities*/
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            //Return  the items array
            return this.items;
        });
    }
    /*Get the entity with the specific id*/
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let entity = this.items.find(item => item.id === id);
            if (entity != undefined) {
                //Return the entity with this id
                return entity; // ask this => <T>Object.assign({}, entity);
            }
            else {
                throw new Error(`Cannot find entity with ID: ${id}`);
            }
        });
    }
    /*Adding a new entity to the entities list*/
    add(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (entity.id === undefined) {
                entity.id = this.findMaxId() + 1;
            }
            //Add the new entity in the list
            this.items.push(entity);
            let data = JSON.stringify(this.items, null, 2);
            fs.writeFileSync(this.getFileName(), data);
            return entity;
        });
    }
    /*Update an entity*/
    update(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            let current = this.items.find(item => item.id == entity.id);
            if (current !== undefined) {
                //Update the entity
                Object.assign(current, entity);
                return current;
            }
            else {
                throw new Error(`Cannot update the  entity with ID: ${entity.id}`);
            }
        });
    }
    /* Delete one entity with the specific id*/
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = this.items.findIndex(item => item.id === id);
            if (index != -1) {
                this.items.splice(index, 1);
                let data = JSON.stringify(this.items, null, 2);
                fs.writeFileSync(this.getFileName(), data);
                return true;
            }
            else {
                //throw new Error(`Cannot delete entity with invalid ID: ${id}`);
                console.log(`Cannot delete entity with invalid ID: ${id}`);
                return false;
            }
        });
    }
    /*This functions delets many entities*/
    deleteMany(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let id of ids) {
                if ((yield this.delete(id)) == false) {
                    return false;
                }
            }
            return true;
        });
    }
}
exports.EntityService = EntityService;
