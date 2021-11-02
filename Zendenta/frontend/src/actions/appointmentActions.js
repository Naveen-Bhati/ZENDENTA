import axios from 'axios'
import {
    APPOINTMENT_CREATE_FAIL,
    APPOINTMENT_CREATE_REQUEST,
    APPOINTMENT_CREATE_SUCCESS
} from "../constants/appointmentConstants"

export const createAppointment = (
    name, phone, email, date,
    area, city, state, postalCode,
    isBooked) => async (dispatch, getState) => {
        try {
            dispatch({ type: APPOINTMENT_CREATE_REQUEST })

            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            const { data } = await axios.post('/api/appointments', {
                name, phone, email, date,
                area, city, state, postalCode,
                isBooked
            }, config)

            dispatch({
                type: APPOINTMENT_CREATE_SUCCESS,
                payload: data
            })

        } catch (error) {
            dispatch({
                type: APPOINTMENT_CREATE_FAIL,
                payload: error.response && error.response.data.message ?
                    error.response.data.message : error.response
            })
        }

    }