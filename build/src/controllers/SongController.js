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
const SongServices_1 = require("../services/SongServices");
const errorHandler_1 = require("../handlers/errorHandler");
class SongController {
    getAllSongs(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let songService = new SongServices_1.SongServices;
                const songsList = yield songService.getAll();
                res.status(200).json(songsList);
            }
            catch (error) {
                (0, errorHandler_1.apiErrorHandler)(error, req, res, 'Fetch All Songs failed.');
            }
        });
    }
    getSongById(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let songService = new SongServices_1.SongServices;
                const song = yield songService.getById(Number(req.params.id));
                res.status(200).json(song);
            }
            catch (error) {
                res.status(404).json((0, errorHandler_1.apiErrorHandler)(error, req, res, `Could not  find song whit id ${req.params.id}`));
            }
        });
    }
    addNewSong(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, duration, genre, noOfListeners, artistId } = req.body;
                let songService = new SongServices_1.SongServices;
                let newSong = { name: name, duration: Number(duration), genre: genre, noOfListeners: Number(noOfListeners), artistId: Number(artistId) };
                const song = yield songService.add(newSong);
                res.status(200).json(song);
            }
            catch (error) {
                (0, errorHandler_1.apiErrorHandler)(error, req, res, "Cannot add the new song");
            }
        });
    }
    updateSong(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, duration, genre, noOfListeners, artistId } = req.body;
                let songService = new SongServices_1.SongServices;
                let updateSong = { id: Number(req.params.id), name: name, duration: Number(duration), genre: genre, noOfListeners: Number(noOfListeners), artistId: Number(artistId) };
                const song = yield songService.update(updateSong);
                res.status(200).json(song);
            }
            catch (error) {
                res.status(404).json((0, errorHandler_1.apiErrorHandler)(error, req, res, `Could not  find artist whit id ${req.params.id}`));
            }
        });
    }
    deleteSong(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let songService = new SongServices_1.SongServices;
                const result = yield songService.delete(Number(req.params.id));
                res.status(200).json(result);
            }
            catch (error) {
                res.status(404).json((0, errorHandler_1.apiErrorHandler)(error, req, res, `Cannot delete the song with id ${req.params.id}`));
            }
        });
    }
}
exports.default = SongController;
