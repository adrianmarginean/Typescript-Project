import { NextFunction,Response,Request } from "express";
import { Artist } from "../models/Artist";
import { ArtistServices } from "../services/ArtistServices";
import { apiErrorHandler } from '../handlers/errorHandler';

export default class ArtistController{
    
    constructor(){
    }
    

    async getAllArtists(req: Request, res: Response, nextFunction: NextFunction){
        try{
            let artistServices: ArtistServices= new ArtistServices();
            const artistsList:Artist[] =  await artistServices.getAll();
            res.status(200).json(artistsList);
        }catch(error){
            apiErrorHandler(error, req, res, 'Fetch All Artists failed.');
        }
    }

    async getArtistById(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let artistServices: ArtistServices= new ArtistServices();
            const artist:Artist =  await artistServices.getById(Number(req.params.id));
            res.status(200).json(artist);
        }catch(error){
             res.status(404).json(apiErrorHandler(error, req, res, `Could not  find artist whit id ${req.params.id}`));
        }
    }

    async addNewArtist(req:Request<{}, {}, {name: string, age: number}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let artistServices: ArtistServices= new ArtistServices();
            let newArtist: Artist= {name:req.body.name ,age:Number(req.body.age)};
            const artist:Artist = await artistServices.add(newArtist);
            res.status(200).json(artist);
        }catch(error){
            apiErrorHandler(error, req, res, "Cannot add the new artist");
        }
    }

    async updateArtist(req:Request<{id: string}, {}, {name: string, age: number}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let artistServices: ArtistServices= new ArtistServices();
            let updateArtist: Artist = {id:Number(req.params.id),name:req.body.name ,age:Number(req.body.age)};
            const artist:Artist = await artistServices.update(updateArtist)
            res.status(200).json(artist);
        }catch(error){
            res.status(404).json(apiErrorHandler(error, req, res, `Cannot update the artist with id ${req.params.id}`));
        }

    }

    async deleteArtist(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let artistServices: ArtistServices= new ArtistServices();
            const result: boolean = await artistServices.delete(Number(req.params.id));
            res.status(200).json(result)
        }catch(error){
            res.status(404).json(apiErrorHandler(error, req, res, `Cannot delete the artist with id ${req.params.id}`));
        }
    }
    
}