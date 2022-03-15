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
class SongController {
    getAllPlaylists(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let playlistServices = new PlaylistServices_1.PlaylistServices();
                const playlistsList = yield playlistServices.getAll();
                res.status(200).json(playlistsList);
            }
            catch (error) {
                console.log(error);
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
                console.log(error);
            }
        });
    }
}
exports.default = SongController;
