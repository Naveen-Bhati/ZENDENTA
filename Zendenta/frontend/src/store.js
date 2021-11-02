import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userListReducer } from './reducers/userReducers'
import { appointmentCreateReducer } from './reducers/appointmentReducers'

const reducer = combineReducers({
    userList: userListReducer,
    appointmentCreate: appointmentCreateReducer
})
const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store