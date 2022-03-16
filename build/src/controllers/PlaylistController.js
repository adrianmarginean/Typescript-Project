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
const PlaylistServices_1 = require("../services/PlaylistServices");
const errorHandler_1 = require("../handlers/errorHandler");
class SongController {
    getAllPlaylists(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let playlistServices = new PlaylistServices_1.PlaylistServices();
                const playlistsList = yield playlistServices.getAll();
                res.status(200).json(playlistsList);
            }
            catch (error) {
                (0, errorHandler_1.apiErrorHandler)(error, req, res, 'Fetch All Playlists failed.');
            }
        });
    }
    getPlaylistById(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let playlistServices = new PlaylistServices_1.PlaylistServices();
                const playlist = yield playlistServices.getById(Number(req.params.id));
                res.status(200).json(playlist);
            }
            catch (error) {
                res.status(404).json((0, errorHandler_1.apiErrorHandler)(error, req, res, `Cannot found the playlist with id ${req.params.id}`));
            }
        });
    }
    addNewPlaylist(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, duration, songs } = req.body;
                let playlistServices = new PlaylistServices_1.PlaylistServices;
                let newPlaylist = { name: name, duration: Number(duration), songs: songs };
                const playlist = yield playlistServices.add(newPlaylist);
                res.status(200).json(playlist);
            }
            catch (error) {
                (0, errorHandler_1.apiErrorHandler)(error, req, res, "Cannot add the new playlist");
            }
        });
    }
    updatePlaylist(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, duration, songs } = req.body;
                let playlistServices = new PlaylistServices_1.PlaylistServices;
                let newPlaylist = { id: Number(req.params.id), name: name, duration: Number(duration), songs: songs };
                const playlist = yield playlistServices.update(newPlaylist);
                res.status(200).json(playlist);
            }
            catch (error) {
                res.status(404).json((0, errorHandler_1.apiErrorHandler)(error, req, res, `Cannot update the playlist with id ${req.params.id}`));
            }
        });
    }
    deletePlaylist(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let playlistServices = new PlaylistServices_1.PlaylistServices;
                const result = yield playlistServices.delete(Number(req.params.id));
                res.status(200).json(result);
            }
            catch (error) {
                res.status(404).json((0, errorHandler_1.apiErrorHandler)(error, req, res, `Cannot delete the playlist with id ${req.params.id}`));
            }
        });
    }
}
exports.default = SongController;
