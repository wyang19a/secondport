import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import Bg1 from "../images/bg/bg1.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'
import FeatureStyle2 from '../components/Features/FeatureStyle2'
import CountUp from 'react-countup'
import BG6 from "../images/bg/bg6.jpg"
import PortfolioCol3Style1 from "../components/Portfolio/PortfolioCol3Style1"
import Human from "../images/others/02.png"
import CallToAction2 from '../components/CallToAction/CallToAction2'
import PricingTable from '../components/PricingTable'
import FooterStyle1 from '../components/Footer/FooterStyle1'

const ServicePage1 = () => {
    return (
        <>
            <HeaderStyle1/>
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Pages" pageTitle="Our Service" />

            {/* Start Feature Section */}
            <section
                className="pad-t80 pad-b50 parallax"
                style={{ backgroundImage: `url(${Bg1})` }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="Revson's Features" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <FeatureStyle2
                        title="Nulla porttitor accumsan"
                        text="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan."
                        icon="icon-clock"
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle2
                        title="Vestibulum ac diam sit"
                        text="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit."
                        icon="icon-aperture"
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle2
                        title="Praesent sapien massa"
                        text="Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus."
                        icon="icon-layers"
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle2
                        title="Pellentesque in ipsum"
                        text="Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit."
                        icon="icon-genius"
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle2
                        title="Cras ultricies ligula sed"
                        text="Lorem ipsum dolor sit amet, consect adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum."
                        icon="icon-beaker"
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle2
                        title="Lorem ipsum dolor sit"
                        text="Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta."
                        icon="icon-bargraph"
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle2
                        title="NULLA PORTTITOR ACCUMSAN"
                        text="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan."
                        icon="icon-puzzle"
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle2
                        title="VESTIBULUM AC DIAM SIT"
                        text="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit."
                        icon="icon-trophy"
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle2
                        title="PELLENTESQUE IN IPSUM"
                        text="Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit."
                        icon="icon-lifesaver"
                    />
                    </div>
                </div>
                </div>
            </section>
            {/* End Feature Section */}


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
                    <PortfolioCol3Style1 />
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


            {/* Start Why Choose Us Section Section*/}
            <section className="pad-t80" style={{backgroundColor: "#f9f9f9"}}>
                <div className="container">
                <div className="row">
                    <div className="col-md-7">
                    <SectionTitle titleStyle="left" title="Why Choose Us" />
                    <FeatureStyle2
                        title="We are the best company in town"
                        text="Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque"
                        icon="icon-paperclip"
                    />
                    <FeatureStyle2
                        title="We always give priority to customer"
                        text="Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque"
                        icon="icon-paperclip"
                    />
                    <FeatureStyle2
                        title="No one can ahead of us"
                        text="Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque"
                        icon="icon-paperclip"
                    />
                    </div>
                    <div className="col-md-5">
                    <div className="template-image text-center">
                        <img src={Human} alt="" />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* End Why Choose Us Section Section*/}

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


            <FooterStyle1/>

        </>
    )
}

export default ServicePage1
