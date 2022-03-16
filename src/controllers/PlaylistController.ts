import { PlaylistServices } from "../services/PlaylistServices";
import { NextFunction,Response,Request } from "express";
import { Playlist } from "../models/Playlist";
import { Song } from "../models/Song";
import { apiErrorHandler } from '../handlers/errorHandler';

export default class SongController{

    async getAllPlaylists(req: Request, res: Response, nextFunction: NextFunction){
        try{
            let playlistServices: PlaylistServices = new PlaylistServices();
            const playlistsList:Playlist[] =  await playlistServices.getAll();
            res.status(200).json(playlistsList);
        }catch(error){
            apiErrorHandler(error, req, res, 'Fetch All Playlists failed.');
        }
    }

    async getPlaylistById(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let playlistServices: PlaylistServices = new PlaylistServices();
            const playlist:Playlist =  await playlistServices.getById(Number(req.params.id));
            res.status(200).json(playlist);
        }catch(error){
            res.status(404).json(apiErrorHandler(error, req, res, `Cannot found the playlist with id ${req.params.id}`));
        }
    }

    async addNewPlaylist(req:Request<{},{},{name:string, duration:string, songs:Song[]},{}>, res: Response, nextFunction: NextFunction){
        try{
            const{name, duration, songs} = req.body;
            let playlistServices: PlaylistServices= new PlaylistServices;
            let newPlaylist:Playlist = {name:name,duration:Number(duration),songs:songs}
            const playlist:Playlist = await playlistServices.add(newPlaylist);
            res.status(200).json(playlist);
        }catch(error){
            apiErrorHandler(error, req, res, "Cannot add the new playlist");
        }
    }

    async updatePlaylist(req:Request<{id: string},{},{name:string, duration:string, songs:Song[]},{}>, res: Response, nextFunction: NextFunction){
        try{
            const{name, duration, songs} = req.body;
            let playlistServices: PlaylistServices= new PlaylistServices;
            let newPlaylist:Playlist = {id:Number(req.params.id),name:name,duration:Number(duration),songs:songs}
            const playlist:Playlist = await playlistServices.update(newPlaylist);
            res.status(200).json(playlist);
        }catch(error){
            res.status(404).json(apiErrorHandler(error, req, res, `Cannot update the playlist with id ${req.params.id}`));
        }
    }

    async deletePlaylist(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
        try{
            let playlistServices: PlaylistServices= new PlaylistServices;
            const result: boolean = await playlistServices.delete(Number(req.params.id));
            res.status(200).json(result)
        }catch(error){
            res.status(404).json(apiErrorHandler(error, req, res, `Cannot delete the playlist with id ${req.params.id}`));
        }
    }

}