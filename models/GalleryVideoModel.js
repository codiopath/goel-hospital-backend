const mongoose = require('mongoose')

const GalleryVideoSchema = mongoose.Schema({
    video: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now()
    }
})

const GalleryVideoModel = mongoose.model('galleryVideo', GalleryVideoSchema)

module.exports = GalleryVideoModel