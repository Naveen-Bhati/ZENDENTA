import asyncHandler from 'express-async-handler'
import Appointment from '../models/appointmentModel.js'

//@desc create a new appointment
//@route POST /api/appointments/
//@access Public

const createAppointment = asyncHandler(async (req, res) => {
    const { name, phone, email, date, area, city, state, postalCode, isBooked } = req.body

    const appointment = await Appointment.create({
        name,
        phone,
        email,
        date,
        area,
        city,
        state,
        postalCode,
        isBooked
    })

    if (appointment) {
        res.status(201).json({
            name: appointment.name,
            phone: appointment.phone,
            email: appointment.email,
            date: appointment.date,
            area: appointment.area,
            city: appointment.city,
            state: appointment.state,
            postalCode: appointment.postalCode,
            isBooked: appointment.isBooked
        })
    } else {
        res.status(400);
        throw new Error('Invalid Appointment Data')
    }
})




//@desc get all appointments
//@route get /api/appointments/
//@access Admin


const getAppointments = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find({})
    res.json({ appointments })
    // if (appointments) {
    //     res.status(201)
    //     res.json({ appointments })
    // } else {
    //     res.status(400)
    //     throw new Error('Appointments not found')
    // }
})

export { createAppointment, getAppointments }
