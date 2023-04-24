const mongoose = require('mongoose')

const DoctorsSchema = mongoose.Schema({
    name: {
        type: String
    },
    speciality: {
        type: String
    },
    image: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    linkedin: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now()
    }
})

const DoctorsModel = mongoose.model('doctor', DoctorsSchema)

module.exports = DoctorsModel