"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PlaylistController_1 = __importDefault(require("../controllers/PlaylistController"));
class PlaylistRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.route('/').get(PlaylistController_1.default.getAllPlaylists);
        this.router.route('/:id').get(PlaylistController_1.default.getPlaylistById);
        this.router.route('/add').post(PlaylistController_1.default.createPlaylist);
        this.router.route('/update/:id').put(PlaylistController_1.default.updatePlaylist);
        this.router.route('/delete/:id').delete(PlaylistController_1.default.deletePlaylist);
    }
}
exports.default = new PlaylistRoutes().router;
