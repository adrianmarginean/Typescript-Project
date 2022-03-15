"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArtistRoutes_1 = __importDefault(require("./ArtistRoutes"));
const PlaylistRoutes_1 = __importDefault(require("./PlaylistRoutes"));
const SongRoutes_1 = __importDefault(require("./SongRoutes"));
class Routes {
    constructor(app) {
        //artist routes
        app.use('/api/artists', ArtistRoutes_1.default);
        //song routes
        app.use('/api/songs', SongRoutes_1.default);
        //playlist routes
        app.use('/api/playlists', PlaylistRoutes_1.default);
    }
}
exports.default = Routes;
