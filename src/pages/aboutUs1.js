import React from 'react'
import img2 from "../images/others/img-2.jpg"
import HumanImg from "../images/others/img-026.png"
import BG6 from "../images/bg/bg6.jpg"
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'
import FeatureStyle9 from '../components/Features/FeatureStyle9'
import FeatureStyle2 from '../components/Features/FeatureStyle2'
import CountUp from 'react-countup'
import Testimonial from '../components/Testimonial'
import FooterStyle1 from '../components/Footer/FooterStyle1'

const AboutUs1 = () => {
    return (
        <>
           <HeaderStyle1 />
           <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Pages" pageTitle="About Us" />
           {/* Start Feature Section */}
            <section className="pad-t80 pad-b30 parallax">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="Revson's Features" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <FeatureStyle9
                        featureStyle="text-center"
                        icon="icon-layers"
                        title="labore et dolore"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle9
                        featureStyle="text-center"
                        icon="icon-aperture"
                        title="labore et dolore"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle9
                        featureStyle="text-center"
                        icon="icon-genius"
                        title="labore et dolore"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle9
                        featureStyle="text-center"
                        icon="icon-beaker"
                        title="labore et dolore"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle9
                        featureStyle="text-center"
                        icon="icon-bargraph"
                        title="labore et dolore"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle9
                        featureStyle="text-center"
                        icon="icon-puzzle"
                        title="labore et dolore"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                    />
                    </div>
                </div>
                </div>
            </section>
            {/* End Feature Section */}

            {/* Start image content Service Section*/}
            <section
                className="pad-t80 pad-b50"
                style={{ backgroundColor: "#f9f9f9", position: "relative" }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-4"></div>
                    <div className="col-md-8 col-sm-8">
                    <h3
                        style={{
                        fontSize: "30px",
                        lineHeight: "40px",
                        margin: "0 0 10px",
                        textTransform: "uppercase",
                        }}
                    >
                        WE ARE Always HERE TO <br />
                        PROVIDE Service
                    </h3>
                    <p>
                        Lorem ipsum dolor sit consectetur adipiscing elit. Quisque velit
                        nisi pretium ut lacinia in, elementum id enim.
                    </p>
                    <div className="feature-list" style={{ marginTop: "40px" }}>
                        <div className="row">
                        <div className="col-md-6">
                            <FeatureStyle2
                            icon="icon-puzzle"
                            title="DESIGNED TO BE AMAZING"
                            text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                            />
                        </div>
                        <div className="col-md-6">
                            <FeatureStyle2
                            icon="icon-mobile"
                            title="Industrial Services"
                            text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                            />
                        </div>
                        <div className="col-md-6">
                            <FeatureStyle2
                            icon="icon-layers"
                            title="Startup Business Planning"
                            text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                            />
                        </div>
                        <div className="col-md-6">
                            <FeatureStyle2
                            icon="icon-trophy"
                            title="Make company top"
                            text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="left-half width33"
                style={{
                    backgroundImage: `url(${img2})`,
                    backgroundPosition: "-300px center",
                }}
                ></div>
            </section>
            {/* End image content Service Section*/}

            {/* Start Text Section */}
            <section className="">
                <div className="container">
                <div className="row">
                    <div className="col-md-7">
                    <div className="text-section" style={{ marginTop: "80px" }}>
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
                            <i className="fa-li icon-aperture"></i>Interdum et malesuada
                            fames ac ante
                        </li>
                        <li>
                            <i className="fa-li icon-aperture"></i>Malesuada fames ac
                            ante ipsum
                        </li>
                        <li>
                            <i className="fa-li icon-aperture"></i>Nam blandit quam
                            nibh, at fermentum
                        </li>
                        </ul>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        </p>
                        <a href="#" className="btn btn-primary">
                        Know More
                        </a>
                    </div>
                    </div>
                    <div className="col-md-4 ml-auto">
                    <div className="mbl-margin-top text-center">
                        <img src={HumanImg} alt="theshahriyar" className="img-fluid" />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* End Text Section */}


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

            {/* Start Testimonial Section*/}
            <section
            className="pad80 parallax"
            >
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="What people say" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
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

export default AboutUs1
