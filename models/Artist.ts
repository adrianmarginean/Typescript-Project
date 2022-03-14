import { HasId } from "./HasId"

/**
 * An artits
 */
export interface Artist extends HasId {
    /**
     * Name
     */
    name:string
    /**
     * Age
     */
    age:number
    
}