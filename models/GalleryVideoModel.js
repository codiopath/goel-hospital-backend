const mongoose = require('mongoose')

const GalleryVideoSchema = mongoose.Schema({
    video: {
        type: String
    }
})

const GalleryVideoModel = mongoose.model('galleryVideo', GalleryVideoSchema)

module.exports = GalleryVideoModel