import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
i{
    margin-right: 10px;
}
.App{
    display: flex;
    height:100vh;
    width:100vw;
    
}
p{
    color:grey
}

`
export const MainContent = styled.div`
  display: flex;
flex-direction: column;

`

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
`

export const Main = styled(Container)`
height: 90vh;
width: 80vw;
background-color: magenta;
`

export const Card = styled.div`
height: 46vh;
border: 1px solid white;
width: 57%;
background-color: gainsboro;
`
export const MoreButton = styled.button`
    height: 38px;
    width: 120px;
    border-radius: 100px;
    background-color:blueviolet;
    border: 1px solid white;
    box-sizing:border-box;
`








export default GlobalStyle;
