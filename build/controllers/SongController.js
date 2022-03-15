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
class SongController {
    getAllSongs(req, res, nextFunction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let songService = new SongServices_1.SongServices;
                const songsList = yield songService.getAll();
                res.status(200).json(songsList);
            }
            catch (error) {
                console.log(error);
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
                console.log(error);
            }
        });
    }
}
exports.default = SongController;
