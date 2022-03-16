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
        this.playlistController = new PlaylistController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.route('/').get(this.playlistController.getAllPlaylists);
        this.router.route('/:id').get(this.playlistController.getPlaylistById);
        this.router.route('/add').post(this.playlistController.addNewPlaylist);
        this.router.route('/update/:id').put(this.playlistController.updatePlaylist);
        this.router.route('/delete/:id').delete(this.playlistController.deletePlaylist);
    }
}
exports.default = new PlaylistRoutes().router;
