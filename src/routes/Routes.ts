import { Application } from "express";
import artistRoutes from "./ArtistRoutes";
import playlistRoutes from "./PlaylistRoutes";
import songRoutes from "./SongRoutes";
import UserRoutes from "./UserRoutes";
import { NextFunction,Response,Request } from "express";

export default class Routes{

    constructor(app: Application){
        //artist routes
        app.use('/api/artists', artistRoutes);
        //song routes
        app.use('/api/songs', songRoutes)
        //playlist routes
        app.use('/api/playlists', playlistRoutes)
        //user routes
        app.use('/api/user', UserRoutes)
        //default
        app.use('/', (req:Request,res:Response )=> {
            res.send("hello")
        })
    }

}