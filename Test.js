"use strict";
exports.__esModule = true;
var ArtistServices_1 = require("./services/ArtistServices");
var PlaylistServices_1 = require("./services/PlaylistServices");
var SongServices_1 = require("./services/SongServices");
//Artist CRUD
var testArtist = new ArtistServices_1.ArtistServices();
var newArtist = { age: 21, name: "Anamaria" };
var updateArtist = { age: 22, name: "AnamariaYessss", id: 3 };
// console.log("GET ALL");
// console.log(testArtist.getAll());
// console.log("GET BY ID");
// console.log(testArtist.getById(1));
// console.log("ADD");
// console.log(testArtist.add(newArtist)); 
// console.log("UPDATE");
// console.log(testArtist.update(updateArtist));
// console.log("DELETE");
// console.log(testArtist.delete(2));
// console.log("DELETE MANY");
// console.log(testArtist.deleteMany([11,12]));
//Playlist CRUD
var testPlaylist = new PlaylistServices_1.PlaylistServices();
var newPlaylist = { name: "Latino", duration: 40, songs: [{ name: "Test", duration: 25, genre: "String", noOfListeners: 10, artistId: 1 }] };
var updatePlaylist = { name: "Latino", duration: 50, songs: [{ name: "Test", duration: 25, genre: "String", noOfListeners: 10, artistId: 1 }], id: 3 };
// console.log("GET ALL");
// console.log(testPlaylist.getAll());
// console.log("GET BY ID");
// console.log(testPlaylist.getById(1));
// console.log("ADD");
// console.log(testPlaylist.add(newPlaylist)); 
// console.log("UPDATE");
// console.log(testPlaylist.update(updatePlaylist));
// console.log("DELETE");
// console.log(testPlaylist.delete(2));
//Song CRUD
var testSong = new SongServices_1.SongServices();
var newSong = { name: "Tusa", duration: 4, genre: "Latino", noOfListeners: 5, artistId: 1 };
var updateSong = { name: "Tusa", duration: 4, genre: "PopLatino", noOfListeners: 5, artistId: 1, id: 3 };
// console.log("GET ALL");
// console.log(testSong.getAll());
// console.log("GET BY ID");
// console.log(testSong.getById(1));
// console.log("ADD");
// console.log(testSong.add(newSong)); 
// console.log("UPDATE");
// console.log(testSong.update(updateSong));
// console.log("DELETE");
// console.log(testSong.delete(2));
// //Filter songs by artist
// console.log("Please insert the name of your favorite artist")
// console.log(testSong.filterSongsByArtist("Bad Bunny"));
// //Filter songs by number of time was played
// console.log("Please insert a number for searching your most wanted songs")
// console.log(testSong.filterSongsByTimePlayed(20));
//Manage playlist
//Add
var song = { name: "TestAdd", duration: 5, genre: "Test", noOfListeners: 11 };
console.log(testPlaylist.addSong(1, song));
//Delete
console.log(testPlaylist.deleteSong(1, 1));
