var mongoose = require('mongoose')
var Schema = mongoose.Schema

var memberSchema = new Schema({
  first_name: String,
  last_name: String,
  image: String,
  fb: String,
  twitter: String
})

var Member = mongoose.model( 'Member', memberSchema )

module.exports = Member
