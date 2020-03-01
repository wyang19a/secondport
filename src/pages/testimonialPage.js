import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'
import FooterStyle1 from '../components/Footer/FooterStyle1'
import Testimonial from '../components/Testimonial'
import BG2 from "../images/bg/bg2.jpg"

const testimonialPage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Testimonials" />

            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Carousel" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Testimonial/>
                        </div>
                    </div>
                </div>
            </section>


            <section
            className="pad80 parallax"
            style={{ backgroundImage: `url(${BG2})` }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="What people say" titleStyle="white" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <Testimonial textStyle="white"/>
                    </div>
                </div>
                </div>
            </section>

            <section className="pad80" style={{backgroundColor: "#ddd"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Carousel" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Testimonial/>
                        </div>
                    </div>
                </div>
            </section>


            <FooterStyle1/>
        </>
    )
}

export default testimonialPage
