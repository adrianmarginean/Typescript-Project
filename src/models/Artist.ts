import mongoose, { Schema } from 'mongoose';
import IArtist from '../interfaces/Artist'

const ArtistSchema: Schema = new Schema({
    name: { type: String, required: true, default:"Empty" },
    age: { type: Number, required: true, default:999 } 
})

export default mongoose.model<IArtist>("Artist",ArtistSchema);