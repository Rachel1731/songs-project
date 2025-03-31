const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
  songs: String,
  composer: String,
});

const Song = mongoose.model("Song", songsSchema); 

module.exports = songs;

const songs = await Song.findIdAndUpdate('67e849177caaab3b7f68e442',
{
  song: 'Queen of the Night'
  composer: 'Mozart'
}
)
