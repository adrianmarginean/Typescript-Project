import mongoose, { Schema } from 'mongoose';
import IPlaylist from '../interfaces/Playlist';

const PlaylistSchema: Schema = new Schema({
    name: { type: String, required: true, default: "Empty" },
    duration: { type: Number, required: true, default: 999 },
    songs:[ {type: Schema.Types.ObjectId, ref:"Song"}]
});

export default mongoose.model<IPlaylist>('Playlist', PlaylistSchema);