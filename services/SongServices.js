"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SongServices = void 0;
var EntityService_1 = require("./EntityService");
var ArtistServices_1 = require("./ArtistServices");
var SongServices = /** @class */ (function (_super) {
    __extends(SongServices, _super);
    function SongServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SongServices.prototype.getFileName = function () {
        return "songs.json";
    };
    SongServices.prototype.filterSongsByArtist = function (artistName) {
        var artistServices = new ArtistServices_1.ArtistServices();
        var allSongs = _super.prototype.getAll.call(this);
        var allArtists = artistServices.getAll();
        var songsByArtist = [];
        var idArtist;
        for (var _i = 0, allArtists_1 = allArtists; _i < allArtists_1.length; _i++) {
            var artist = allArtists_1[_i];
            if (artist.name === artistName) {
                idArtist = artist.id;
            }
        }
        for (var _a = 0, allSongs_1 = allSongs; _a < allSongs_1.length; _a++) {
            var song = allSongs_1[_a];
            if (song.artistId === idArtist) {
                songsByArtist.push(song);
            }
        }
        return songsByArtist;
    };
    SongServices.prototype.filterSongsByTimePlayed = function (noOfListeners) {
        var songsPlayed = [];
        for (var _i = 0, _a = _super.prototype.getAll.call(this); _i < _a.length; _i++) {
            var song = _a[_i];
            if (song.noOfListeners === noOfListeners) {
                songsPlayed.push(song);
            }
        }
        return songsPlayed;
    };
    return SongServices;
}(EntityService_1.EntityService));
exports.SongServices = SongServices;
