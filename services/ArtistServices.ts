import { EntityService } from "./EntityService";
import { Artist } from "../models/Artist";

export class ArtistServices extends EntityService<Artist>{
    getFileName(): string {
       return 'artists.json'
    }

}