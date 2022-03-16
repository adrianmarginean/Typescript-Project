import { Application } from "express";
import artistRoutes from "./ArtistRoutes";
import playlistRoutes from "./PlaylistRoutes";
import songRoutes from "./SongRoutes";

export default class Routes{

    constructor(app: Application){
        //artist routes
        app.use('/api/artists', artistRoutes);
        //song routes
        app.use('/api/songs', songRoutes)
        //playlist routes
        app.use('/api/playlists', playlistRoutes)
    }

}