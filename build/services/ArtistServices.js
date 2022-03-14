"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistServices = void 0;
const EntityService_1 = require("./EntityService");
class ArtistServices extends EntityService_1.EntityService {
    getFileName() {
        return 'artists.json';
    }
}
exports.ArtistServices = ArtistServices;
