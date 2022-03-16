"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtistServices_1 = require("../services/ArtistServices");
const errorHandler_1 = require("../handlers/errorHandler");
class ArtistController {
    constructor() {
    }
    getAllArtists(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let artistServices = new ArtistServices_1.ArtistServices();
                const artistsList = yield artistServices.getAll();
                res.status(200).json(artistsList);
            }
            catch (error) {
                (0, errorHandler_1.apiErrorHandler)(error, req, res, 'Fetch All Artists failed.');
            }
        });
    }
    getArtistById(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let artistServices = new ArtistServices_1.ArtistServices();
                const artist = yield artistServices.getById(Number(req.params.id));
                res.status(200).json(artist);
            }
            catch (error) {
                res.status(404).json((0, errorHandler_1.apiErrorHandler)(error, req, res, `Could not  find artist whit id ${req.params.id}`));
            }
        });
    }
    addNewArtist(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let artistServices = new ArtistServices_1.ArtistServices();
                let newArtist = { name: req.body.name, age: Number(req.body.age) };
                const artist = yield artistServices.add(newArtist);
                res.status(200).json(artist);
            }
            catch (error) {
                (0, errorHandler_1.apiErrorHandler)(error, req, res, "Cannot add the new artist");
            }
        });
    }
    updateArtist(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let artistServices = new ArtistServices_1.ArtistServices();
                let updateArtist = { id: Number(req.params.id), name: req.body.name, age: Number(req.body.age) };
                const artist = yield artistServices.update(updateArtist);
                res.status(200).json(artist);
            }
            catch (error) {
                res.status(404).json((0, errorHandler_1.apiErrorHandler)(error, req, res, `Cannot update the artist with id ${req.params.id}`));
            }
        });
    }
    deleteArtist(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let artistServices = new ArtistServices_1.ArtistServices();
                const result = yield artistServices.delete(Number(req.params.id));
                res.status(200).json(result);
            }
            catch (error) {
                res.status(404).json((0, errorHandler_1.apiErrorHandler)(error, req, res, `Cannot delete the artist with id ${req.params.id}`));
            }
        });
    }
}
exports.default = ArtistController;
