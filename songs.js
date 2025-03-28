// models/songs.js

const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
  songs: String,
  composer: String,
});

const Song = mongoose.model("Song", songsSchema); // create model

// models/songs.js

module.exports = songs;

mongoose.connect(process.env.MONGODB_URI);