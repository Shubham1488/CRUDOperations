const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let liquidMapSchema = new Schema({
  nameofmap: {
    type: String
  },
  description: {
    type: String
  },
  lastupdated: {
    type: String
  },
  version: {
    type: String
  }
}, {
    collection: 'liquidmaps'
  })

module.exports = mongoose.model('liquidmap', liquidMapSchema)