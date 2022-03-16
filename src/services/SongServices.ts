import { EntityService } from "./EntityService";
import { Song } from "../models/Song";
import { ArtistServices } from "./ArtistServices";
import { Artist } from "../models/Artist";

export class SongServices extends EntityService<Song>{

    getFileName(): string {
       return "songs.json"
    }

    async filterSongsByArtist(artistName: string): Promise<Song[]>{
       let artistServices: ArtistServices = new ArtistServices();
       let allSongs:Song[]= await super.getAll();
       let allArtists:Artist[]= await artistServices.getAll();
       let songsByArtist:Song[] = [];
       let idArtist;

       for(let artist of allArtists){
           if( artist.name === artistName){
                idArtist = artist.id;
           }
       }

       for(let song of allSongs){
           if(song.artistId === idArtist){
               songsByArtist.push(song);
           }
       }

       return songsByArtist;

    }

    async filterSongsByTimePlayed(noOfListeners:number):Promise<Song[]>{
        let songsPlayed:Song[] = [];

        for(let song of await super.getAll()){
            if(song.noOfListeners === noOfListeners){
                songsPlayed.push(song);
            }
        }

        return songsPlayed;
    }
    
}