"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SongController_1 = __importDefault(require("../controllers/SongController"));
class SongRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.songController = new SongController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.route('/').get(this.songController.getAllSongs);
        this.router.route('/:id').get(this.songController.getSongById);
    }
}
exports.default = new SongRoutes().router;
