import mongoose from 'mongoose'

const appointmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    isBooked: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})


const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;