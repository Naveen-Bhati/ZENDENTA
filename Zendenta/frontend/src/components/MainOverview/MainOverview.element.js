import styled from "styled-components";
import { Main, Card, MoreButton } from "../../GlobalStyles";


export const OverviewMain = styled(Main)`
display: flex;
flex-direction: column;
justify-content:space-between;
`

export const OverviewInner = styled.div`
width:100%;
display:flex;
justify-content: space-between;
`


export const ChartCard = styled(Card)`
background-color:blue;
`


export const RequestCard = styled(Card)`
background-color:green;
width:42%;
display: flex;
flex-direction: column;
/* justify-content: space-between; */
`
export const RequestCardUp = styled.div`
display:flex;
justify-content: space-between;
`

export const InnerComponent = styled.div`
height:${(props) => props.size === 'small' ? '12vh' : '25vh'};
background-color: orange;
display:flex;
flex-direction: column;
justify-content: space-evenly;
`
export const ApprovelRequest = styled.div`
height: 23vh;
width:49%

`
export const UpcomingAppointment = styled.div`
background-color:lightcyan;
width: 50%;
`
export const ClientInformation = styled.div`
width:100%;
background-color: sandybrown;
`



export const TodaysAppointment = styled.div`
width: 24%;
`
export const TopTreatment = styled(TodaysAppointment)``
export const TotalPatient = styled(TodaysAppointment)``
export const Jaspel = styled(TodaysAppointment)``

export const ButtonCard = styled(Card)`
width:100%;
height:${(props) => props.size === 'small' ? '23vh' : '36vh'};
display:flex;
justify-content:  space-evenly;
flex-direction: column;
padding-left: 20px;
`




export const CardButton = ({ title, children, size }) => {
    return (
        <ButtonCard size={size}>
            <h5>{title}</h5>
            <InnerComponent size={size}>{children}</InnerComponent>
            <MoreButton />
        </ButtonCard>
    )
}
