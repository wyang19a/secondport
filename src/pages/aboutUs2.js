import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import ProgressBar from "../components/ProgressBar"
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import FooterStyle1 from '../components/Footer/FooterStyle1'
import Img2 from "../images/others/img-2.jpg"
import {
    FaDropbox,
    FaGlobeAsia,
    FaPlaneDeparture,
    FaTruckMoving,
    FaRegHandLizard,
    FaUserSecret,
  } from "react-icons/fa"
import FeatureStyle7 from '../components/Features/FeatureStyle7'
import ReactMinimalPieChart from "react-minimal-pie-chart"
import Bg6 from "../images/bg/bg6.jpg"
import Client1 from "../images/client/1.png"
import Client2 from "../images/client/2.png"
import Client3 from "../images/client/3.png"
import Client4 from "../images/client/4.png"
import Client5 from "../images/client/5.png"
import Client6 from "../images/client/6.png"
import Testimonial from "../components/Testimonial"

const AboutUs2 = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Pages" pageTitle="About Us" />

            {/* Start About Text Section */}
            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Who We Are" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p style={{textAlign: "right"}}>Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skill-section" style={{marginTop: "40px"}}>
                                <div className="skill-shortcode">
                                    <div className="skill">
                                    <span className="skill-name">Web Design</span>
                                    <ProgressBar width="75" />
                                    </div>
                                </div>
                                <div className="skill-shortcode">
                                    <div className="skill">
                                        <span className="skill-name">Web Design</span>          
                                        <ProgressBar width="95" /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill-section" style={{marginTop: "40px"}}>
                                <div className="skill-shortcode">
                                    <div className="skill">
                                        <span className="skill-name">Web Design</span>          
                                        <ProgressBar width="85" /> 
                                    </div>
                                </div>
                                <div className="skill-shortcode">
                                    <div className="skill">
                                        <span className="skill-name">Web Design</span>          
                                        <ProgressBar width="80" /> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End About Text Section */}


            {/* Start About Us Section */}
            <section className="pad80" style={{ backgroundColor: "#f3f3f3" }}>
                <div className="container">
                <div className="row">
                    <div className="col-md-7">
                    <SectionTitle
                        titleStyle="left"
                        title="ABOUT US AND OUR PRIORITIES"
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="row mbl-margin-bottom">
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaDropbox />}
                            title="Packaging"
                            subtitle="We package &amp; store"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaGlobeAsia />}
                            title="Worldwide"
                            subtitle="Everywhere"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaPlaneDeparture />}
                            title="Plane"
                            subtitle="Faster With Plane"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaTruckMoving />}
                            title="Transporting"
                            subtitle="We Fast Transport"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaRegHandLizard />}
                            title="Hand to Hand"
                            subtitle="Secure Transport"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaUserSecret />}
                            title="Secure"
                            subtitle="We Gurantee"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <img src={Img2} alt="" className="w-100" />
                    <h4
                        style={{
                        marginTop: "30px",
                        marginBottom: "15px",
                        fontSize: "18px",
                        }}
                    >
                        Who We Are
                    </h4>
                    <p>
                        Proin eget tortor risus. Donec sollicitudin molestie malesuada.
                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia Curae.
                    </p>
                    </div>
                </div>
                </div>
            </section>
            {/* End About Us Section */}


            {/* Start Progressive chart Section */}
            <section
                className="pad-t80 pad-b50 parallax"
                style={{ backgroundImage: `url(${Bg6})` }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="Work Progress" titleStyle="white" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    <div className="progress-chart-feature white">
                        <ReactMinimalPieChart
                        background="#f1f1f1"
                        animate={true}
                        animationDuration={1000}
                        animationEasing="ease-out"
                        cx={50}
                        cy={50}
                        data={[
                            {
                            color: "#f1f1f1",
                            title: "One",
                            value: 10,
                            },
                            {
                            color: "#f00",
                            title: "Two",
                            value: 75,
                            },
                        ]}
                        lineWidth={10}
                        radius={30}
                        rounded
                        />
                        <h4>EDGE</h4>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="progress-chart-feature white">
                        <ReactMinimalPieChart
                        background="#f1f1f1"
                        animate={true}
                        animationDuration={1000}
                        animationEasing="ease-out"
                        cx={50}
                        cy={50}
                        data={[
                            {
                            color: "#f1f1f1",
                            title: "One",
                            value: 5,
                            },
                            {
                            color: "#f00",
                            title: "Two",
                            value: 95,
                            },
                        ]}
                        lineWidth={10}
                        radius={30}
                        rounded
                        />
                        <h4>Chrome</h4>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="progress-chart-feature white">
                        <ReactMinimalPieChart
                        background="#f1f1f1"
                        animate={true}
                        animationDuration={1000}
                        animationEasing="ease-out"
                        cx={50}
                        cy={50}
                        data={[
                            {
                            color: "#f1f1f1",
                            title: "One",
                            value: 20,
                            },
                            {
                            color: "#f00",
                            title: "Two",
                            value: 80,
                            },
                        ]}
                        lineWidth={10}
                        radius={30}
                        rounded
                        />
                        <h4>Safari</h4>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="progress-chart-feature white">
                        <ReactMinimalPieChart
                        background="#f1f1f1"
                        animate={true}
                        animationDuration={1000}
                        animationEasing="ease-out"
                        cx={50}
                        cy={50}
                        data={[
                            {
                            color: "#f1f1f1",
                            title: "One",
                            value: 10,
                            },
                            {
                            color: "#f00",
                            title: "Two",
                            value: 90,
                            },
                        ]}
                        lineWidth={10}
                        radius={30}
                        rounded
                        />
                        <h4>Firefox</h4>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* End Progressive chart Section */}


            {/* Start Testimonial Section*/}
            <section className="pad80 parallax" style={{ backgroundColor: "#fff" }}>
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="What People Say" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mbl-margin-bottom">
                    <ul className="logo-group width33">
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
                        <li className="client-logo">
                        <a href="#">
                            <img src={Client6} alt="Client's Logo" />
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-6">
                    <Testimonial/>
                    </div>
                </div>
                </div>
            </section>
            {/* End Testimonial Section*/}


            {/* Start FOoter Section*/}
            <FooterStyle1 />
            {/* End FOoter Section*/}
            
        </>
    )
}

export default AboutUs2
