import React from 'react'
import styled from "styled-components";
import HOCModal from '../../hoc/HOCModal';



export const AppointmentForm = styled.form`
height: 100%;
display: flex;
flex-direction: column;

input{
    padding:20px 15px;
    border-radius: 5px;
}
justify-content: space-between;
`


const AppointmentModal = () => {
    return (
        <HOCModal >
            <AppointmentForm>
                <input type="text" placeholder="Enter full name" />
                <input type="text" placeholder="Enter mobile number" />
                <input type="text" placeholder="Enter email address" />
                <input type="date" placeholder="Enter appointment date" />
                <input type="text" placeholder="Enter area name" />
                <input type="text" placeholder="Enter city name" />
                <input type="text" placeholder="Enter state name" />
                <input type="number" placeholder="Enter postal code" />
            </AppointmentForm>
        </HOCModal>
    )
}

export default AppointmentModal
