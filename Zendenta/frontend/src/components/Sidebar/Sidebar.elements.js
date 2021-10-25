import styled from "styled-components";
import { Link } from 'react-router-dom'


export const Side = styled.div`
height: 100vh;
width: 20vw;
position: relative;
`


export const SidebarContainer = styled.div`
height: 100vh;
width: 20vw;
`


export const SideLogo = styled(Link)`
box-sizing: border-box;

img{
    width: 90%;
    margin: 10px;
    object-fit: contain;
}
`


export const SideMenu = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
padding-left: auto;

`


export const SideItem = styled.li`
`


export const SideLink = styled(Link)`
font-weight:600;
letter-spacing: 2px;
width:100%;
height:60px;
padding-left: 20%;
padding-top: 20px;
display: block;
text-decoration: none;
outline-style: none;
&:hover{
    background-color: blue;
    color: white;
    
}
`


export const SideFooter = styled.div`
position: absolute;
left: 0;
bottom: 0;
display: flex;
flex-direction: column;
width: 100%;

`


export const SideHelp = styled.div`
height: 60px;
width: 100%;
padding-left: 20%;
padding-top: 20px;
font-weight:600;
letter-spacing: 2px;
color: grey;
`


export const DrInfo = styled.div`
height: 60px;
color: grey;
display: flex;
padding-left: 20%;
font-weight:600;
letter-spacing: 2px;
p{
    padding-top: 20px;
    padding-left: 5%;
}
img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border:1px solid green;
    box-sizing: border-box;
    object-fit: contain;
    margin-top: 10px;
}
`