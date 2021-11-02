import React from 'react'
import {
    ApprovelRequest,
    CardButton,
    ChartCard,
    ClientInformation,
    Jaspel,
    OverviewInner,
    OverviewMain,
    RequestCard,
    RequestCardUp,
    TodaysAppointment,
    TopTreatment,
    TotalPatient,
    UpcomingAppointment
} from './MainOverview.element'


const MainOverview = () => {
    return (
        <OverviewMain>
            <OverviewInner>
                <ChartCard></ChartCard>
                <RequestCard>
                    <RequestCardUp>
                        <ApprovelRequest>
                            <CardButton title='Approval Request' size='small'>
                                <h1>16</h1>
                                <p>Request waiting to approve</p>
                            </CardButton>
                        </ApprovelRequest>
                        <UpcomingAppointment>
                            <CardButton title='Upcoming Appointments' size='small'>
                                <h1>14</h1>
                                <p><i className="fad fa-file-check"></i></p>
                            </CardButton>
                        </UpcomingAppointment>
                    </RequestCardUp>
                    <RequestCardUp>
                        <ClientInformation>
                            <CardButton title='Client Information' size='small'>
                                <p><i className="far fa-calendar"></i>Jain fulwari ke samne, Ranjan Saray, Bali (306701)</p>
                                <p><i className="far fa-calendar"></i>+91-8290795842, 8949491789</p>
                            </CardButton>
                        </ClientInformation>
                    </RequestCardUp>
                </RequestCard>
            </OverviewInner>
            <OverviewInner>

                <TodaysAppointment>
                    <CardButton title="TODAY'S APPOINTMENT">
                        <h1>14</h1>
                    </CardButton>
                </TodaysAppointment>
                <TopTreatment>
                    <CardButton title='TOP TREATMENT'>
                        <h1>14</h1>
                    </CardButton>
                </TopTreatment>
                <TotalPatient>
                    <CardButton title='TOAL PATIENTS THIS MONTH'>
                        <h1>14</h1>
                    </CardButton>
                </TotalPatient>
                <Jaspel>
                    <CardButton title='JASPEL'>
                        <h1>14</h1>
                    </CardButton>
                </Jaspel>
            </OverviewInner>
        </OverviewMain>
    )
}

export default MainOverview
