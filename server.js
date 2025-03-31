const app = express();
const mongoose = require('mongoose');
const methodOverride = require("method-override"); 
const morgan = require("morgan");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); 
app.use(morgan("dev")); 


app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

const dotenv = require("dotenv"); 
dotenv.config(); 
const express = require("express");

const connect = async () => {
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

await mongoose.connect(process.env.MONGODB_URI)
console.log('Connected to MongoDB')
await runQueries()
await mongoose.disconnect()
console.log('Disconnected from MongoDB')
}

const Songs = require('./models/songs.js');
const songs = require('./models/songs.js');


app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.use(express.urlencoded({ extended: false }));


app.post("/songs", async (req, res) => {
  if (req.body.songs === "on") {
    req.body.composer = true;
  }
  await Songs.create(req.body);
  res.redirect("/songs/new");
});

app.get("/songs", async (req, res) => {
  const allSongs = await Songs.find();
  res.render("songs/index.ejs", { songs: allSongs });
});


app.get("/songs/:songsId", async (req, res) => {
  const foundSongs = await Songs.findById(req.params.songsId);
  res.render("songs/show.ejs", { songs: foundSongs });
});

app.delete("/songs/:songsId", async (req, res) => {
  await Songs.findByIdAndDelete(req.params.fruitId);
  res.redirect("/songs");
});

app.get("/songs/:songsId/edit", async (req, res) => {
  const foundSongs = await Songs.findById(req.params.songsId);
  res.render("songs/edit.ejs", {
    songs: foundSongs,
  });
});

app.put("/songs/:songsId", async (req, res) => {

  if (req.body.isASong === "on") {
    req.body.isASong = true;
  } else {
    req.body.isAComposer = true;
  }
  
  
  await Songs.findByIdAndUpdate(req.params.songsId, req.body);

  res.redirect(`/songs/${req.params.songsId}`);
});


const runQueries = async () => {
  console.log('Queries running. ')
  const newSongsData = {
    song: "Queen of the Night"
    composer: "Mozart"
  }

  await Songs.create{newSongsData}

}

connect()








 








  
