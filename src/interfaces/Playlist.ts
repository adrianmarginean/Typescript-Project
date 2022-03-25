
import { Document} from "mongoose";
import Song from "./Song";

/**
 * A playlist
 */
export default interface Playlist extends Document{
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
