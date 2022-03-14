import { Song } from "./Song";
import { HasId } from "./HasId";

/**
 * A playlist
 */
export interface Playlist extends HasId{
    /**
     * Playlist name
     */
    name:string;
    /**
     * Duration of playlist in minutes
     */
    duration:number;
    /**
     * The songs which are in this playlist
     */
    songs: Song[];
}