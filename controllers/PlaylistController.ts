import { PlaylistServices } from "../services/PlaylistServices";
import { NextFunction,Response,Request } from "express";
import { Playlist } from "../models/Playlist";

export default class SongController{

    async getAllPlaylists(req: Request, res: Response, nextFunction: NextFunction){
        try{
            let playlistServices: PlaylistServices = new PlaylistServices();
            const playlistsList:Playlist[] =  await playlistServices.getAll();
            res.status(200).json(playlistsList);
        }catch(error){
            console.log(error);
        }
    }

    async getPlaylistById(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let playlistServices: PlaylistServices = new PlaylistServices();
            const playlist:Playlist =  await playlistServices.getById(Number(req.params.id));
            res.status(200).json(playlist);
        }catch(error){
            console.log(error);
        }
    }
}