import React from 'react'
import { Side, SidebarContainer, SideLogo, SideMenu, SideItem, SideLink, SideFooter, SideHelp, DrInfo } from './Sidebar.elements'
import Logo from '../../assets/images/logo.png'
import Naveen from '../../assets/images/Naveen.jpg'

const Sidebar = () => {
    return (
        <Side>
            <SidebarContainer>
                <SideLogo to='/'>
                    <img src={Logo} alt="Zendenta" />
                </SideLogo>
                <SideMenu>
                    <SideItem>
                        <SideLink to='/'>
                            <i className="far fa-calendar"></i>
                            Overview
                        </SideLink>
                    </SideItem>
                    <SideItem>
                        <SideLink to='/calendar'>
                            <i className="far fa-calendar"></i>
                            Calendar
                        </SideLink>
                    </SideItem>
                    <SideItem>
                        <SideLink to='/patientlist'>
                            <i className="far fa-calendar"></i>
                            Patient List
                        </SideLink>
                    </SideItem>
                    <SideItem>
                        <SideLink to='/messages'>
                            <i className="far fa-calendar"></i>
                            Messages
                        </SideLink>
                    </SideItem>
                    <SideItem>
                        <SideLink to='/paymentinfo'>
                            <i className="far fa-calendar"></i>
                            Payment Info.
                        </SideLink>
                    </SideItem>
                    <SideItem>
                        <SideLink to='/settings'>
                            <i className="far fa-calendar"></i>
                            Settings
                        </SideLink>
                    </SideItem>
                </SideMenu>
                <SideFooter>
                    <SideHelp><i className="far fa-calendar"></i>Help</SideHelp>
                    <DrInfo>
                        <img src={Naveen} alt="Dr." />
                        <p>Dr. Naveen Bhati</p>
                    </DrInfo>
                </SideFooter>
            </SidebarContainer>
        </Side>
    )
}

export default Sidebar
