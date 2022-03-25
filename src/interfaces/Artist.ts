import  {Document} from "mongoose";
/**
 * An artits
 */
export default interface Artist extends Document {
    /**
     * Name
     */
    name:string,
    /**
     * Age
     */
    age:number
    
}
