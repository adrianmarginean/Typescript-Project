"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArtistServices_1 = require("./src/services/ArtistServices");
const PlaylistServices_1 = require("./src/services/PlaylistServices");
const SongServices_1 = require("./src/services/SongServices");
//Artist CRUD
let testArtist = new ArtistServices_1.ArtistServices();
let newArtist = { age: 21, name: "Anamaria" };
let updateArtist = { age: 22, name: "AnamariaYessss", id: 3 };
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
let testPlaylist = new PlaylistServices_1.PlaylistServices();
let newPlaylist = { name: "Latino", duration: 40, songs: [{ name: "Test", duration: 25, genre: "String", noOfListeners: 10, artistId: 1 }] };
let updatePlaylist = { name: "Latino", duration: 50, songs: [{ name: "Test", duration: 25, genre: "String", noOfListeners: 10, artistId: 1 }], id: 3 };
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
let testSong = new SongServices_1.SongServices();
let newSong = { name: "Tusa", duration: 4, genre: "Latino", noOfListeners: 5, artistId: 1 };
let updateSong = { name: "Tusa", duration: 4, genre: "PopLatino", noOfListeners: 5, artistId: 1, id: 3 };
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
//Filter songs by number of time was played
console.log("Please insert a number for searching your most wanted songs");
testSong.filterSongsByTimePlayed(20).then((songs) => {
    console.log(songs);
});
// //Manage playlist
// //Add
// let song:Song = {name: "TestAdd",duration:5,genre:"Test",noOfListeners:11}
// console.log(testPlaylist.addSong(1,song)); //no working with promises
// //Delete
// console.log(testPlaylist.deleteSong(1,2)); //no working with promises
