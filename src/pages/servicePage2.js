import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import Img9 from "../images/others/img-9.jpg"
import Img5 from "../images/others/img-9.jpg"
import Img4 from "../images/others/img-9.jpg"
import BG6 from "../images/bg/bg6.jpg"
import Human from "../images/others/02.png"
import ParalaxBg from "../images/bg/parallax2.jpg"
import FeatureStyle6 from '../components/Features/FeatureStyle6'
import { FaCheckCircle } from "react-icons/fa"
import PortfolioCol3Style2 from '../components/Portfolio/PortfolioCol3Style2'
import CallToAction2 from '../components/CallToAction/CallToAction2'
import PricingTable from '../components/PricingTable'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import FooterStyle1 from '../components/Footer/FooterStyle1'
import CountUp from 'react-countup'

const ServicePage2 = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Pages" pageTitle="Our Service" />

            {/* Start Welcome Section */}
            <section className="pad-t80 pad-b50">
                <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <FeatureStyle6
                        image={Img9}
                        title="Praesent sapien massa"
                        text="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada."
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle6
                        image={Img5}
                        title="Convallis pellentes nec"
                        text="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle6
                        image={Img4}
                        title="Donec sollicitudin molestie"
                        text="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada."
                    />
                    </div>
                </div>
                </div>
            </section>
            {/* End Welcome Section */}


            {/* Start image content Section */}
            <section
                className="pad-t80 pad-b50"
                style={{ backgroundColor: "#ed1c24", position: "relative" }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                    <div
                        className="text-section white"
                        style={{ paddingRight: "10%" }}
                    >
                        <h4>
                        Why you will
                        <br />
                        Choose Revson
                        </h4>
                        <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                        sem. Nulla porttitor accumsan tincidunt. Curabitur aliquet
                        quam id dui posuere blandit. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Quisque velit nisi, pretium ut
                        lacinia in, elementum id enim.
                        </p>
                        <ul className="fa-ul">
                        <li>
                            <FaCheckCircle /> Interdum et malesuada fames ac ante
                        </li>
                        <li>
                            <FaCheckCircle /> Malesuada fames ac ante ipsum
                        </li>
                        <li>
                            <FaCheckCircle /> Nam blandit quam nibh, at fermentum
                        </li>
                        </ul>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                        <a href="#" className="btn btn-primary white">
                        Know More
                        </a>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-6"></div>
                </div>
                </div>
                <div
                className="right-half width50"
                style={{ backgroundImage: `url(${ParalaxBg})` }}
                ></div>
            </section>
            {/* End image content Section */}

            {/* Start Portfolio Section*/}
            <section className="pad-t80 pad-b50">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="Revson's Portfolio" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <PortfolioCol3Style2 />
                    </div>
                </div>
                </div>
            </section>
            {/* End Portfolio Section*/}

            {/* Start Counter Section*/}
            <section
                className="pad-t80 pad-b50 parallax"
                style={{
                backgroundImage: `url(${BG6})`,
                backgroundPosition: "50% 40px",
                }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 ">
                    <div className="animated-counter text-center white">
                        <div className="animated-number">
                        <CountUp end={125} duration={10} />
                        </div>
                        <h4>Completed Projects</h4>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="animated-counter text-center white">
                        <div className="animated-number">
                        <CountUp end={8285} duration={10} />
                        </div>
                        <h4>Coffee Ordered</h4>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="animated-counter text-center white">
                        <div className="animated-number">
                        <CountUp end={2245} duration={10} />
                        </div>
                        <h4>Problem Solved</h4>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="animated-counter text-center white">
                        <div className="animated-number">
                        <CountUp end={543} duration={10} />
                        </div>
                        <h4>Happy Clients</h4>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* End Counter Section*/}

            {/* Start Accordion Section */}
            <section className="" style={{ backgroundColor: "#fff" }}>
                <div className="container">
                <div className="row">
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
                    <div className="col-md-5">
                    <div className="text-center">
                        <img src={Human} alt="theshahriyar" />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* End Accordion Section */}

            {/* Start Call to Action Section*/}
            <CallToAction2 bgColor="#222" paddingClass="pad80" />
            {/* End Call to Action Section*/}

            {/* Start Pricing Table Section*/}
            <section className="pad-t80 pad-b50">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="Pricing Chart" />
                    </div>
                </div>
                <PricingTable />
                </div>
            </section>
            {/* End Pricing Table Section*/}

            <FooterStyle1 />
        </>
    )
}

export default ServicePage2
