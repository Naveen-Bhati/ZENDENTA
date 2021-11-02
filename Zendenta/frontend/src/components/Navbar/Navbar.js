import React, { useState } from 'react'
import { Nav, NavLeft, NavRight } from './Navbar.element'
import { createAppointment } from '../../actions/appointmentActions'
import { useDispatch, useSelector } from 'react-redux'


const Navbar = (props) => {

    const dispatch = useDispatch()


    // const createAppointmentHandler = ()=>{
    //     dispatch(createAppointment)
    // }

    // const [showModal, setShowModal] = useState(false)

    return (
        <Nav>
            {/* onClick={() => setShowModal(!showModal)} */}
            <NavLeft>
                <i className="fas fa-plus-circle"></i>
            </NavLeft>
            <NavRight>NavRight</NavRight>

        </Nav>
    )
}

export default Navbar
