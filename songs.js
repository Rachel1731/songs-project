const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
  name: String,
  isASong: Boolean,
});

const Song = mongoose.model("Song", songsSchema); 

module.exports = Song;
