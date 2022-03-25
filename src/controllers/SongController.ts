import { NextFunction,Response,Request } from "express";
import mongoose from 'mongoose';
import Song from '../models/Song';

// export default class SongController{

//     async getAllSongs(req: Request, res: Response, nextFunction: NextFunction){
//         try{
//             let songService: SongServices= new SongServices;
//             const songsList:Song[] =  await songService.getAll();
//             res.status(200).json(songsList);
//         }catch(error){
//             apiErrorHandler(error, req, res, 'Fetch All Songs failed.');
//         }
//     }

//     async getSongById(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
//         try{
//             let songService: SongServices= new SongServices;
//             const song:Song =  await songService.getById(Number(req.params.id));
//             res.status(200).json(song);
//         }catch(error){
//             res.status(404).json(apiErrorHandler(error, req, res, `Could not  find song whit id ${req.params.id}`));
//         }
//     }

//     async addNewSong(req:Request<{},{},{name:string, duration:string, genre:string, noOfListeners:string, artistId:string},{}>, res: Response, nextFunction: NextFunction){
//         try{
//             const{name, duration, genre, noOfListeners, artistId} = req.body;
//             let songService: SongServices= new SongServices;
//             let newSong:Song = {name:name,duration:Number(duration),genre:genre,noOfListeners:Number(noOfListeners),artistId:Number(artistId)}
//             const song:Song = await songService.add(newSong);
//             res.status(200).json(song);
//         }catch(error){
//             apiErrorHandler(error, req, res, "Cannot add the new song");
//         }
//     }

//     async updateSong(req:Request<{id: string},{},{name:string, duration:string, genre:string, noOfListeners:string, artistId:string},{}>, res: Response, nextFunction: NextFunction){
//         try{
//             const{name, duration, genre, noOfListeners, artistId} = req.body
//             let songService: SongServices= new SongServices;
//             let updateSong:Song = {id:Number(req.params.id),name:name,duration:Number(duration),genre:genre,noOfListeners:Number(noOfListeners),artistId:Number(artistId)}
//             const song:Song = await songService.update(updateSong);
//             res.status(200).json(song);
//         }catch(error){
//             res.status(404).json(apiErrorHandler(error, req, res, `Could not  find artist whit id ${req.params.id}`));
//         }
//     }

//     async deleteSong(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
//         try{
//             let songService: SongServices= new SongServices;
//             const result: boolean = await songService.delete(Number(req.params.id));
//             res.status(200).json(result)
//         }catch(error){
//             res.status(404).json(apiErrorHandler(error, req, res, `Cannot delete the song with id ${req.params.id}`));
//         }
//     }
// }

const createSong = (req:Request<{},{},{name:string, duration:string, genre:string, noOfListeners:string, artistId:string},{}>, res: Response, nextFunction: NextFunction) => {
    let { name, duration, genre, noOfListeners, artistId } = req.body;

    const song = new Song({
        _id: new mongoose.Types.ObjectId(),
        name,
        duration,
        genre,
        noOfListeners,
        artistId
    });

    return song
        .save()
        .then((song) => {
            return res.status(201).json({
                song: song
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllSongs = (req: Request, res: Response, next: NextFunction) => {
    Song.find()
        .exec()
        .then((songs) => {
            return res.status(200).json({
                songs: songs,
                count: songs.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};


const getSongById = (req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction) => {
    let { id } = req.params;
    Song.findById(id)
    .exec()
    .then((song) =>{
        return res.status(200).json({
            song: song
        });
    })
    .catch((error) =>{
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

const deleteSong = (req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction) => {
    let { id } = req.params;
    Song.findByIdAndDelete(id)
    .exec()
    .then(() =>{
        return res.status(200).json({
          res: `Song with ${id} was deleted`
        });
    })
    .catch((error) =>{
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

const updateSong = (req:Request<{id: string},{},{name:string, duration:string, genre:string, noOfListeners:string, artistId:string},{}>, res: Response, nextFunction: NextFunction) => {
    let { id } = req.params;
    const{name, duration, genre, noOfListeners, artistId} = req.body
    let updateSong = {id:Number(req.params.id),name:name,duration:Number(duration),genre:genre,noOfListeners:Number(noOfListeners), artistId:artistId}
    Song.findByIdAndUpdate(id,updateSong)
    .exec()
    .then((song) =>{
        return res.status(200).json({
          res: song
        });
    })
    .catch((error) =>{
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};

export default { updateSong, deleteSong, getSongById, getAllSongs, createSong };