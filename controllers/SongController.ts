import { SongServices } from "../services/SongServices";
import { NextFunction,Response,Request } from "express";
import { Song } from "../models/Song";

export default class SongController{

    async getAllSongs(req: Request, res: Response, nextFunction: NextFunction){
        try{
            let songService: SongServices= new SongServices;
            const songsList:Song[] =  await songService.getAll();
            res.status(200).json(songsList);
        }catch(error){
            console.log(error);
        }
    }

    async getSongById(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let songService: SongServices= new SongServices;
            const song:Song =  await songService.getById(Number(req.params.id));
            res.status(200).json(song);
        }catch(error){
            console.log(error);
        }
    }
}