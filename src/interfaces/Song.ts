import {Document} from "mongoose";


/**
 * A song
 */
export default interface Song extends Document{
    /**
     * Name
     */
    name:string;
    /**
     * Duration in seconds
     */
    duration:number;
    /**
     * Genre
     */
    genre:string;
    /**
     * Total no. of listeners
     */
    noOfListeners:number;
    /**
     * The artist who sing the song
     */
    artistId?: number;
}
