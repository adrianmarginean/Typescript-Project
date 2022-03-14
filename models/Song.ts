import { HasId } from "./HasId"

/**
 * A song
 */
export interface Song extends HasId{
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