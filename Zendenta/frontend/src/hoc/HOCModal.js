import React from 'react'
import styled from 'styled-components'
import { BackDrop, Container, GlobalButton } from '../GlobalStyles'

export const HOCContainer = styled(Container)`
display:flex;
flex-direction: column;
justify-content:space-between;
height : ${(props) => props.height ? props.height : '85vh'};
width : ${(props) => props.width ? props.width : '50%'}; 
border-radius: 15px;
background-color: rgb(76,76,65);
position:absolute;
left:0;
top:0;
right:0;
bottom:0;
margin:auto;
`
export const ButtonDiv = styled.div`
display:flex;
justify-content: space-evenly;
text-align: center;
margin-top: 9px;
`

const HOCModal = (props) => {
    const submitButtonHandler = () => {
        console.log('submitted');
    }
    const closeModalHandler = () => {
        console.log('closed');
    }

    return (
        <BackDrop>
            <HOCContainer>
                {props.children}
                <ButtonDiv>
                    <GlobalButton color='green' onCick={submitButtonHandler}> Submit</GlobalButton>
                    <GlobalButton color='red' onClick={closeModalHandler}>Close</GlobalButton>
                </ButtonDiv>

            </HOCContainer >

        </BackDrop >
    )
}

export default HOCModal
