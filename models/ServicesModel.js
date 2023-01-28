const mongoose = require('mongoose')

const ServicesSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    tags: {
        type: String
    }
})

const ServicesModel = mongoose.model('services', ServicesSchema)

module.exports = ServicesModel