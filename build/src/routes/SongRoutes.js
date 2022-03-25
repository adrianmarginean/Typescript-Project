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
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.route('/').get(SongController_1.default.getAllSongs);
        this.router.route('/:id').get(SongController_1.default.getSongById);
        this.router.route('/add').post(SongController_1.default.createSong);
        this.router.route('/update/:id').put(SongController_1.default.updateSong);
        this.router.route('/delete/:id').delete(SongController_1.default.deleteSong);
    }
}
exports.default = new SongRoutes().router;
