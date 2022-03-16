import { EntityService } from "./EntityService";
import { Playlist } from "../models/Playlist";
import { Song } from "../models/Song";
import * as fs from 'fs';

export class PlaylistServices extends EntityService<Playlist>{

    getFileName(): string {
       return "playlists.json"
    }

    async addSong(idPlaylist: number,song: Song):Promise<boolean>{
        let playlist: Playlist = await super.getById(idPlaylist);
        if(playlist !== undefined){
            playlist.songs.push(song);
            Object.assign(super.getById(idPlaylist),playlist);
            let data = JSON.stringify(super.getAll(), null, 2);
            fs.writeFileSync(this.getFileName(), data);
            return true
        } else{
             //throw new Error(`Cannot find entity with invalid ID: ${id}`);
             console.log(`Cannot find entity with invalid ID: ${idPlaylist}`);
             return false;
        }
    }

    async deleteSong(idPlaylist: number, idSong: number):Promise<boolean>{
        let playlist: Playlist = await super.getById(idPlaylist);
        if(playlist !== undefined){
            let index = playlist.songs?.findIndex(item => item.id === idSong);

            if(index !== undefined){
            playlist.songs.splice(index,1);
            Object.assign(super.getById(idPlaylist),playlist);
            let data = JSON.stringify(super.getAll(), null, 2);
            fs.writeFileSync(this.getFileName(), data);
             return true;
               }else{
                     //throw new Error(`Cannot find song with invalid ID: ${id}`);
                     console.log(`Cannot find song with invalid ID: ${idSong}`);
                     return false;
                     }

        } else{
             //throw new Error(`Cannot find playlist with invalid ID: ${id}`);
             console.log(`Cannot find playlis with invalid ID: ${idPlaylist}`);
             return false;
        }
    }
    
}