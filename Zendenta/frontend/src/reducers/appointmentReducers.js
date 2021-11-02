import {
    APPOINTMENT_CREATE_FAIL,
    APPOINTMENT_CREATE_REQUEST,
    APPOINTMENT_CREATE_SUCCESS
} from "../constants/appointmentConstants";

export const appointmentCreateReducer = (state = {}, action) => {

    switch (action.type) {
        case APPOINTMENT_CREATE_REQUEST:
            return { loading: true }
        case APPOINTMENT_CREATE_SUCCESS:
            return { loading: false, success: true, appointment: action.payload }
        case APPOINTMENT_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}