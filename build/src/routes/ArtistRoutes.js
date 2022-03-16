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
        this.artistController = new ArtistController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.route('/').get(this.artistController.getAllArtists);
        this.router.route('/:id').get(this.artistController.getArtistById);
        this.router.route('/add').post(this.artistController.addNewArtist);
        this.router.route('/update/:id').put(this.artistController.updateArtist);
        this.router.route('/delete/:id').delete(this.artistController.deleteArtist);
    }
}
exports.default = new ArtistRoutes().router;
