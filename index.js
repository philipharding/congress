
// require all the things

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

// var GoogleMapsLoader = require('google-maps'); // only for common js environments
//
// GoogleMapsLoader.load(function(google) {
//     new google.maps.Map(el, options);
// });

// Sunlight key 88fe617b42db4716b522b0cfb007b044


// create app var to use Express
var app = express()

// assigning the template engine
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// public folder for static files
app.use(express.static('public'));

// we'll need Body Parser
app.use(bodyParser.urlencoded({extended: true}))


// Connect to our Mongo database via Mongoose
//mongoose.connect('mongodb://localhost:27017/tunr')

// require models for Artists
//var Artist = require('./models/artists')


// Routes
app.get('/', function( req , res ) {

    //Artists.find({}, function( err, artists ) {
    //res.render('index', { artists: artists })

    res.render('index')

  })

//////


  app.post('/', function( req, res ) {

    // pass API data to database

    })





app.listen(3000, function() {

  console.log( 'working here!' )

})
