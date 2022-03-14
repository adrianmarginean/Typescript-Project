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
exports.SongServices = void 0;
const EntityService_1 = require("./EntityService");
const ArtistServices_1 = require("./ArtistServices");
class SongServices extends EntityService_1.EntityService {
    getFileName() {
        return "songs.json";
    }
    filterSongsByArtist(artistName) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let artistServices = new ArtistServices_1.ArtistServices();
            let allSongs = yield _super.getAll.call(this);
            let allArtists = yield artistServices.getAll();
            let songsByArtist = [];
            let idArtist;
            for (let artist of allArtists) {
                if (artist.name === artistName) {
                    idArtist = artist.id;
                }
            }
            for (let song of allSongs) {
                if (song.artistId === idArtist) {
                    songsByArtist.push(song);
                }
            }
            return songsByArtist;
        });
    }
    filterSongsByTimePlayed(noOfListeners) {
        const _super = Object.create(null, {
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let songsPlayed = [];
            for (let song of yield _super.getAll.call(this)) {
                if (song.noOfListeners === noOfListeners) {
                    songsPlayed.push(song);
                }
            }
            return songsPlayed;
        });
    }
}
exports.SongServices = SongServices;
