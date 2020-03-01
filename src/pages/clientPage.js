import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import FooterStyle1 from '../components/Footer/FooterStyle1'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Clients from '../components/Clients'

import Client1 from "../images/client/1.png"
import Client2 from "../images/client/2.png"
import Client3 from "../images/client/3.png"
import Client4 from "../images/client/4.png"
import Client5 from "../images/client/5.png"

const clientPage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Client Page" />

            <section className="pad80">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Clients" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Clients/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pad80">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Clients" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="logo-group">
                                <li className="client-logo">
                                    <a href="#">
                                    <img src={Client1} alt="Client's Logo" />
                                    </a>
                                </li>
                                <li className="client-logo">
                                    <a href="#">
                                    <img src={Client2} alt="Client's Logo" />
                                    </a>
                                </li>
                                <li className="client-logo">
                                    <a href="#">
                                    <img src={Client3} alt="Client's Logo" />
                                    </a>
                                </li>
                                <li className="client-logo">
                                    <a href="#">
                                    <img src={Client4} alt="Client's Logo" />
                                    </a>
                                </li>
                                <li className="client-logo">
                                    <a href="#">
                                    <img src={Client5} alt="Client's Logo" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <FooterStyle1/>

        </>
    )
}

export default clientPage
