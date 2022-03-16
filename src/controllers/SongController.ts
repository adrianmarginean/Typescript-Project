import { SongServices } from "../services/SongServices";
import { NextFunction,Response,Request } from "express";
import { Song } from "../models/Song";
import { apiErrorHandler } from '../handlers/errorHandler';

export default class SongController{

    async getAllSongs(req: Request, res: Response, nextFunction: NextFunction){
        try{
            let songService: SongServices= new SongServices;
            const songsList:Song[] =  await songService.getAll();
            res.status(200).json(songsList);
        }catch(error){
            apiErrorHandler(error, req, res, 'Fetch All Songs failed.');
        }
    }

    async getSongById(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let songService: SongServices= new SongServices;
            const song:Song =  await songService.getById(Number(req.params.id));
            res.status(200).json(song);
        }catch(error){
            res.status(404).json(apiErrorHandler(error, req, res, `Could not  find song whit id ${req.params.id}`));
        }
    }

    async addNewSong(req:Request<{},{},{name:string, duration:string, genre:string, noOfListeners:string, artistId:string},{}>, res: Response, nextFunction: NextFunction){
        try{
            const{name, duration, genre, noOfListeners, artistId} = req.body;
            let songService: SongServices= new SongServices;
            let newSong:Song = {name:name,duration:Number(duration),genre:genre,noOfListeners:Number(noOfListeners),artistId:Number(artistId)}
            const song:Song = await songService.add(newSong);
            res.status(200).json(song);
        }catch(error){
            apiErrorHandler(error, req, res, "Cannot add the new song");
        }
    }

    async updateSong(req:Request<{id: string},{},{name:string, duration:string, genre:string, noOfListeners:string, artistId:string},{}>, res: Response, nextFunction: NextFunction){
        try{
            const{name, duration, genre, noOfListeners, artistId} = req.body
            let songService: SongServices= new SongServices;
            let updateSong:Song = {id:Number(req.params.id),name:name,duration:Number(duration),genre:genre,noOfListeners:Number(noOfListeners),artistId:Number(artistId)}
            const song:Song = await songService.update(updateSong);
            res.status(200).json(song);
        }catch(error){
            res.status(404).json(apiErrorHandler(error, req, res, `Could not  find artist whit id ${req.params.id}`));
        }
    }

    async deleteSong(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let songService: SongServices= new SongServices;
            const result: boolean = await songService.delete(Number(req.params.id));
            res.status(200).json(result)
        }catch(error){
            res.status(404).json(apiErrorHandler(error, req, res, `Cannot delete the song with id ${req.params.id}`));
        }
    }
}