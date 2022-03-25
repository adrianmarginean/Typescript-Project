"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Playlist_1 = __importDefault(require("../models/Playlist"));
// export default class SongController{
//     async getAllPlaylists(req: Request, res: Response, nextFunction: NextFunction){
//         try{
//             let playlistServices: PlaylistServices = new PlaylistServices();
//             const playlistsList:Playlist[] =  await playlistServices.getAll();
//             res.status(200).json(playlistsList);
//         }catch(error){
//             apiErrorHandler(error, req, res, 'Fetch All Playlists failed.');
//         }
//     }
//     async getPlaylistById(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
//         try{
//             let playlistServices: PlaylistServices = new PlaylistServices();
//             const playlist:Playlist =  await playlistServices.getById(Number(req.params.id));
//             res.status(200).json(playlist);
//         }catch(error){
//             res.status(404).json(apiErrorHandler(error, req, res, `Cannot found the playlist with id ${req.params.id}`));
//         }
//     }
//     async addNewPlaylist(req:Request<{},{},{name:string, duration:string, songs:Song[]},{}>, res: Response, nextFunction: NextFunction){
//         try{
//             const{name, duration, songs} = req.body;
//             console.log({songs});
//             let playlistServices: PlaylistServices= new PlaylistServices;
//             let newPlaylist:Playlist = {name:name,duration:Number(duration),songs:songs}
//             const playlist:Playlist = await playlistServices.add(newPlaylist);
//             res.status(200).json(playlist);
//         }catch(error){
//             apiErrorHandler(error, req, res, "Cannot add the new playlist");
//         }
//     }
//     async updatePlaylist(req:Request<{id: string},{},{name:string, duration:string, songs:Song[]},{}>, res: Response, nextFunction: NextFunction){
//         try{
//             const{name, duration, songs} = req.body;
//             let playlistServices: PlaylistServices= new PlaylistServices;
//             let newPlaylist:Playlist = {id:Number(req.params.id),name:name,duration:Number(duration),songs:songs}
//             const playlist:Playlist = await playlistServices.update(newPlaylist);
//             res.status(200).json(playlist);
//         }catch(error){
//             res.status(404).json(apiErrorHandler(error, req, res, `Cannot update the playlist with id ${req.params.id}`));
//         }
//     }
//     async deletePlaylist(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
//         try{
//             let playlistServices: PlaylistServices= new PlaylistServices;
//             const result: boolean = await playlistServices.delete(Number(req.params.id));
//             res.status(200).json(result)
//         }catch(error){
//             res.status(404).json(apiErrorHandler(error, req, res, `Cannot delete the playlist with id ${req.params.id}`));
//         }
//     }
// }
const createPlaylist = (req, res, nextFunction) => {
    let { name, duration, songs } = req.body;
    const playlist = new Playlist_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name,
        duration,
        songs
    });
    return playlist
        .save()
        .then((result) => {
        return res.status(201).json({
            playlist: result
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const getAllPlaylists = (req, res, next) => {
    Playlist_1.default.find()
        .exec()
        .then((playlists) => {
        return res.status(200).json({
            playlists: playlists,
            count: playlists.length
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const getPlaylistById = (req, res, nextFunction) => {
    let { id } = req.params;
    Playlist_1.default.findById(id)
        .exec()
        .then((playlist) => {
        return res.status(200).json({
            playlist: playlist
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const deletePlaylist = (req, res, nextFunction) => {
    let { id } = req.params;
    Playlist_1.default.findByIdAndDelete(id)
        .exec()
        .then(() => {
        return res.status(200).json({
            res: `Playlist with ${id} was deleted`
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const updatePlaylist = (req, res, nextFunction) => {
    let { id } = req.params;
    let updatePlaylist = { name: req.body.name, duration: Number(req.body.duration), songs: req.body.songs };
    Playlist_1.default.findByIdAndUpdate(id, updatePlaylist)
        .exec()
        .then((playlist) => {
        return res.status(200).json({
            res: playlist
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.default = { updatePlaylist, deletePlaylist, getAllPlaylists, getPlaylistById, createPlaylist };
