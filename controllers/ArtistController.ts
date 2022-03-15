import { NextFunction,Response,Request } from "express";
import { Artist } from "../models/Artist";
import { ArtistServices } from "../services/ArtistServices";

export default class ArtistController{
    
    constructor(){
    }
    

    async getAllArtists(req: Request, res: Response, nextFunction: NextFunction){
        try{
            let artistServices: ArtistServices= new ArtistServices();
            const artistsList:Artist[] =  await artistServices.getAll();
            res.status(200).json(artistsList);
        }catch(error){
            console.log(error);
        }
    }

    async getArtistById(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let artistServices: ArtistServices= new ArtistServices();
            const artist:Artist =  await artistServices.getById(Number(req.params.id));
            res.status(200).json(artist);
        }catch(error){
            console.log(error);
        }
    }
}