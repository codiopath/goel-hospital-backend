const mongoose = require('mongoose')

const HeroSchema = mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now()
    }
})

const HeroModel = mongoose.model('hero', HeroSchema)

module.exports = HeroModel