const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require("method-override"); 
const morgan = require("morgan");
const path = require("path");
const app = express()

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () =>{
  console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); 
app.use(morgan("dev")); 

//app.use(express.static(path.join(__dirname, "public")));


//const Song = require('./models/songs.js')

//app.get('/Songs:songId/edit', async (req, res)=>{
  //const foundSongs = await Songs.findById(req.params.SongsId)
  //res.render('songs/edit.ejs')
  //Song: foundSongs
//})

//app.put('/songs/:songId', async (req, res)=>{
  //if(req.body.isASong === 'on') {
    //req.body.isASong = true
 // } else {
   // req.body.isaSong = false
 // }
  //await Song.findByIdAndUpdate(req.params.songId, req.body)
  //res.redirect('/songs')
//})

app.get('/', async (req, res)=>{
  res.render('index.ejs')
})

//app.delete("/songs/:songsId", async (req, res) => {
  //await Songs.findByIdAndDelete(req.params.fruitId);
  //res.redirect("/songs");
//});

//app.get('/songs', async (req, res)=> {
  //const allSongs = await Song.find()
  //res.render('songs/index.ejs' , {
   // Song: allSongs
 // })
//})

//app.get("/songs/:songsId", async (req, res) => {
  //const foundSongs = await Songs.findById(req.params.songsId);
 //res.render("songs/show.ejs", { songs: foundSongs });
//});

//app.post('/songs', async (req, res)=>{
//if (req.body.isASong === "on") {
    //req.body.isASong = true;
 // } else {
    //req.body.isASong = false
 // }
 // await Song.create(req.body);
 // res.redirect("/songs/");
//});

app.get('songs/new', (req, res) =>{
  res.render('/songs/new.ejs')
})

app.listen(3000, ()=>{
console.log('Listening on port 3000')
})







 








  
