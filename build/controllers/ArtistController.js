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
                console.log(error);
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
                console.log(error);
            }
        });
    }
}
exports.default = ArtistController;
