"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Artist_1 = __importDefault(require("../models/Artist"));
// export default class ArtistController{
//     constructor(){
//     }
//     async getAllArtists(req: Request, res: Response, nextFunction: NextFunction){
//         try{
//             let artistServices: ArtistServices= new ArtistServices();
//             const artistsList:Artist[] =  await artistServices.getAll();
//             res.status(200).json(artistsList);
//         }catch(error){
//             apiErrorHandler(error, req, res, 'Fetch All Artists failed.');
//         }
//     }
//     async getArtistById(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
//         try{
//             let artistServices: ArtistServices= new ArtistServices();
//             const artist:Artist =  await artistServices.getById(Number(req.params.id));
//             res.status(200).json(artist);
//         }catch(error){
//              res.status(404).json(apiErrorHandler(error, req, res, `Could not  find artist whit id ${req.params.id}`));
//         }
//     }
//     async addNewArtist(req:Request<{}, {}, {name: string, age: number}, {}>, res: Response, nextFunction: NextFunction){
//         try{
//             let artistServices: ArtistServices= new ArtistServices();
//             let newArtist: Artist= {name:req.body.name ,age:Number(req.body.age)};
//             const artist:Artist = await artistServices.add(newArtist);
//             res.status(200).json(artist);
//         }catch(error){
//             apiErrorHandler(error, req, res, "Cannot add the new artist");
//         }
//     }
//     async updateArtist(req:Request<{id: string}, {}, {name: string, age: number}, {}>, res: Response, nextFunction: NextFunction){
//         try{
//             let artistServices: ArtistServices= new ArtistServices();
//             let updateArtist: Artist = {id:Number(req.params.id),name:req.body.name ,age:Number(req.body.age)};
//             const artist:Artist = await artistServices.update(updateArtist)
//             res.status(200).json(artist);
//         }catch(error){
//             res.status(404).json(apiErrorHandler(error, req, res, `Cannot update the artist with id ${req.params.id}`));
//         }
//     }
//     async deleteArtist(req:Request<{id: string}, {}, {}, {}>, res: Response, nextFunction: NextFunction){
//         try{
//             let artistServices: ArtistServices= new ArtistServices();
//             const result: boolean = await artistServices.delete(Number(req.params.id));
//             res.status(200).json(result)
//         }catch(error){
//             res.status(404).json(apiErrorHandler(error, req, res, `Cannot delete the artist with id ${req.params.id}`));
//         }
//     }
// }
const createArtist = (req, res, nextFunction) => {
    let { name, age } = req.body;
    const artist = new Artist_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name,
        age
    });
    return artist
        .save()
        .then((result) => {
        return res.status(201).json({
            artist: result
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const getAllArtists = (req, res, next) => {
    Artist_1.default.find()
        .exec()
        .then((artists) => {
        return res.status(200).json({
            artists: artists,
            count: artists.length
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const getArtistById = (req, res, nextFunction) => {
    let { id } = req.params;
    Artist_1.default.findById(id)
        .exec()
        .then((artist) => {
        return res.status(200).json({
            artist: artist
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const deleteArtist = (req, res, nextFunction) => {
    let { id } = req.params;
    Artist_1.default.findByIdAndDelete(id)
        .exec()
        .then(() => {
        return res.status(200).json({
            res: `Artist with ${id} was deleted`
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const updateArtist = (req, res, nextFunction) => {
    let { id } = req.params;
    let updateArtist = { name: req.body.name, age: Number(req.body.age) };
    Artist_1.default.findByIdAndUpdate(id, updateArtist)
        .exec()
        .then((artist) => {
        return res.status(200).json({
            res: artist
        });
    })
        .catch((error) => {
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.default = { createArtist, getAllArtists, getArtistById, updateArtist, deleteArtist };
