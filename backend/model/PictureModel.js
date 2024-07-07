const mongoose = require('mongoose') 

const Schema = mongoose.Schema

const PictureSchema = new Schema({
    src: {type: String, require: true}
})

module.exports = mongoose.model('Picture', PictureSchema)