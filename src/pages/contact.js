import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'

import {FaMapMarkedAlt, FaPhone, FaEnvelope} from "react-icons/fa"
import FooterStyle1 from '../components/Footer/FooterStyle1'

const contact = () => {
    return (
        <>
           <HeaderStyle1 />
           <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Pages" pageTitle="F.A.Q" />

           <section className="pad-t100 pad-b50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-9 text-center">
                                <span><FaMapMarkedAlt/></span>
                                <h4>Address</h4>
                                <p>G-33/1, Road: XX, USA</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-9 text-center">
                                <span><FaPhone /></span>
                                <h4>Call Us</h4>
                                <p>+8876658768576</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-9 text-center">
                                <span><FaEnvelope /></span>
                                <h4>E-mail</h4>
                                <p>email@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr/>

            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Drop Us a Message" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <form id="contactForm" className="contact-form" method="post">

                            <div className="messages"></div>

                            <div className="controls">

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Name *" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Email *" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone"/>
                                        </div>
                                        <div className="form-group">
                                            <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject *" required="required" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea id="form_message" name="message" className="form-control" placeholder="Message *" required="required" style={{minHeight: "175px"}}></textarea>
                                        </div>
                                        <input type="submit" className="btn btn-primary" value="Send message" />
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="text-muted"><strong>*</strong> These fields are required.</p>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

            <FooterStyle1 />
        </>
    )
}

export default contact
