import axios from 'axios'

import {
    USER_LIST_FAIL,
    USER_LIST_REQUEST,
    USER_LIST_SUCCESS
} from "../constants/userConstants"

export const listUsers = () => async (dispatch) => {

    try {
        dispatch({ type: USER_LIST_REQUEST })
        const { data } = await axios.get('/api/users')
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            error: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}