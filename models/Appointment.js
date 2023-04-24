const mongoose = require('mongoose')

const AppointmentSchema = mongoose.Schema({
    service: {
        type: String
    },
    doctor: {
        type: String
    },
    patientName: {
        type: String,
        required : true
    },
    patientEmail: {
        type: String
    },
    appointmentDate: {
        type: String
    },
    appointmentTime: {
        type: String
    },
    createdAt: {
        type: Date, default: Date.now()
    }
})

const AppointmentModel = mongoose.model('appointment', AppointmentSchema)

module.exports = AppointmentModel