import styled from "styled-components";
import { Container } from "../../GlobalStyles";


export const Nav = styled(Container)`
height: 10vh;
width: 80vw;
background-color: grey;
display:flex;
justify-content: space-between;

i{
    font-size: 24px;
}
`
export const NavLeft = styled.div`
display:flex;
justify-content: space-between;
background-color: palegreen;
cursor:pointer;
`
export const NavRight = styled(NavLeft)`
background-color:khaki;`

export const NavLogo = styled.div`

`