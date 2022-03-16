"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.PlaylistServices = void 0;
const EntityService_1 = require("./EntityService");
const fs = __importStar(require("fs"));
class PlaylistServices extends EntityService_1.EntityService {
    getFileName() {
        return "playlists.json";
    }
    addSong(idPlaylist, song) {
        const _super = Object.create(null, {
            getById: { get: () => super.getById },
            getAll: { get: () => super.getAll }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let playlist = yield _super.getById.call(this, idPlaylist);
            if (playlist !== undefined) {
                playlist.songs.push(song);
                Object.assign(_super.getById.call(this, idPlaylist), playlist);
                let data = JSON.stringify(_super.getAll.call(this), null, 2);
                fs.writeFileSync(this.getFileName(), data);
                return true;
            }
            else {
                //throw new Error(`Cannot find entity with invalid ID: ${id}`);
                console.log(`Cannot find entity with invalid ID: ${idPlaylist}`);
                return false;
            }
        });
    }
    deleteSong(idPlaylist, idSong) {
        const _super = Object.create(null, {
            getById: { get: () => super.getById },
            getAll: { get: () => super.getAll }
        });
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let playlist = yield _super.getById.call(this, idPlaylist);
            if (playlist !== undefined) {
                let index = (_a = playlist.songs) === null || _a === void 0 ? void 0 : _a.findIndex(item => item.id === idSong);
                if (index !== undefined) {
                    playlist.songs.splice(index, 1);
                    Object.assign(_super.getById.call(this, idPlaylist), playlist);
                    let data = JSON.stringify(_super.getAll.call(this), null, 2);
                    fs.writeFileSync(this.getFileName(), data);
                    return true;
                }
                else {
                    //throw new Error(`Cannot find song with invalid ID: ${id}`);
                    console.log(`Cannot find song with invalid ID: ${idSong}`);
                    return false;
                }
            }
            else {
                //throw new Error(`Cannot find playlist with invalid ID: ${id}`);
                console.log(`Cannot find playlis with invalid ID: ${idPlaylist}`);
                return false;
            }
        });
    }
}
exports.PlaylistServices = PlaylistServices;
