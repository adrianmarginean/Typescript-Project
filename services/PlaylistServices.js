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
exports.PlaylistServices = void 0;
var EntityService_1 = require("./EntityService");
var fs = require("fs");
var PlaylistServices = /** @class */ (function (_super) {
    __extends(PlaylistServices, _super);
    function PlaylistServices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaylistServices.prototype.getFileName = function () {
        return "playlists.json";
    };
    PlaylistServices.prototype.addSong = function (idPlaylist, song) {
        var playlist = _super.prototype.getById.call(this, idPlaylist);
        if (playlist !== undefined) {
            playlist.songs.push(song);
            Object.assign(_super.prototype.getById.call(this, idPlaylist), playlist);
            var data = JSON.stringify(_super.prototype.getAll.call(this), null, 2);
            fs.writeFileSync(this.getFileName(), data);
            return true;
        }
        else {
            //throw new Error(`Cannot find entity with invalid ID: ${id}`);
            console.log("Cannot find entity with invalid ID: ".concat(idPlaylist));
            return false;
        }
    };
    PlaylistServices.prototype.deleteSong = function (idPlaylist, idSong) {
        var _a;
        var playlist = _super.prototype.getById.call(this, idPlaylist);
        if (playlist !== undefined) {
            var index = (_a = playlist.songs) === null || _a === void 0 ? void 0 : _a.findIndex(function (item) { return item.id === idSong; });
            if (index !== undefined) {
                playlist.songs.splice(index, 1);
                Object.assign(_super.prototype.getById.call(this, idPlaylist), playlist);
                var data = JSON.stringify(_super.prototype.getAll.call(this), null, 2);
                fs.writeFileSync(this.getFileName(), data);
                return true;
            }
            else {
                //throw new Error(`Cannot find song with invalid ID: ${id}`);
                console.log("Cannot find song with invalid ID: ".concat(idSong));
                return false;
            }
        }
        else {
            //throw new Error(`Cannot find playlist with invalid ID: ${id}`);
            console.log("Cannot find playlis with invalid ID: ".concat(idPlaylist));
            return false;
        }
    };
    return PlaylistServices;
}(EntityService_1.EntityService));
exports.PlaylistServices = PlaylistServices;
