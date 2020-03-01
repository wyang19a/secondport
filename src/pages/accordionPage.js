import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Human from "../images/others/02.png"
import FooterStyle1 from '../components/Footer/FooterStyle1'

const AccordionPage = () => {
    return (
        <>
           <HeaderStyle1 />
           <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Accordion" />

           {/* Start Accordion Section */}
            <section className="pad100" style={{ backgroundColor: "#fff" }}>
                <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="text-center">
                            <img src={Human} alt="theshahriyar" />
                        </div>
                    </div>
                    <div className="col-md-7">
                    <div className="revson-accordion pad-t80 pad-b50">
                        <Accordion defaultActiveKey="1">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            ACCORDION TITLE GOES HERE
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Mauris blandit aliquet elit, eget tincidunt nibh
                                pulvinar a. Vestibulum ante ipsum primis in faucibus
                                orci luctus et ultrices posuere cubilia Curae; Donec
                                velit neque, auctor sit amet aliquam vel, ullamcorper
                                sit amet ligula. Curabitur non nulla sit amet nisl
                                tempus convallis quis ac lectus. Praesent sapien massa,
                                convallis a pellentesque nec, egestas non nisi.
                                Vestibulum ac diam sit amet quam vehicula elementum sed
                                sit amet dui. Cras ultricies ligula sed magna dictum
                                porta. Vestibulum ac diam sit amet quam vehicula
                                elementum sed sit amet dui. Donec sollicitudin molestie
                                malesuada. Cras ultricies ligula sed magna dictum porta.
                                Vestibulum ante ipsum primis in faucibus orci luctus et
                                ultrices posuere cubilia Curae; Donec velit neque,
                                auctor sit amet aliquam vel, ullamcorper sit amet
                                ligula.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            LANNISTER ALWAYS PAYS HIS DEBTS
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec iaculis metus vitae ligula elementum ut luctus
                                lorem facilisis. Sed non leo nisl, ac euismod nisi.
                                Aenean augue dolor, facilisis id fringilla ut, tempus
                                vitae nibh.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                            LANNISTER ALWAYS PAYS HIS DEBTS
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec iaculis metus vitae ligula elementum ut luctus
                                lorem facilisis. Sed non leo nisl, ac euismod nisi.
                                Aenean augue dolor, facilisis id fringilla ut, tempus
                                vitae nibh.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                            LANNISTER ALWAYS PAYS HIS DEBTS
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec iaculis metus vitae ligula elementum ut luctus
                                lorem facilisis. Sed non leo nisl, ac euismod nisi.
                                Aenean augue dolor, facilisis id fringilla ut, tempus
                                vitae nibh.
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* End Accordion Section */}

            <FooterStyle1 />
        </>
    )
}

export default AccordionPage

