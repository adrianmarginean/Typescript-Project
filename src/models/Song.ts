import mongoose, { Schema } from 'mongoose';
import ISong from '../interfaces/Song';

const SongSchema: Schema = new Schema({
    name: { type: String, required: true, default: "Empty" },
    duration: { type: Number, required: true, default: 999 },
    genre: { type: String, required: true, default: "Empty" },
    noOfListeners: { type: String, required: true, default:999},
    artistId: { type: Schema.Types.ObjectId, ref: "Artist" }
});

export default mongoose.model<ISong>('Song',SongSchema);
