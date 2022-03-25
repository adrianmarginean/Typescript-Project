"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ArtistController_1 = __importDefault(require("../controllers/ArtistController"));
class ArtistRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.route('/').get(ArtistController_1.default.getAllArtists);
        this.router.route('/:id').get(ArtistController_1.default.getArtistById);
        this.router.route('/add').post(ArtistController_1.default.createArtist);
        this.router.route('/update/:id').put(ArtistController_1.default.updateArtist);
        this.router.route('/delete/:id').delete(ArtistController_1.default.deleteArtist);
    }
}
exports.default = new ArtistRoutes().router;
