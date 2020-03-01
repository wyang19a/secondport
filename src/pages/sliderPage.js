import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'
import FooterStyle1 from '../components/Footer/FooterStyle1'
import BootstrapSlider from '../components/Slideshow/BootstrapSlider'

const sliderPage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Carousel" />

            <section className="pad80">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Carousel" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <BootstrapSlider/>
                        </div>
                    </div>
                </div>
            </section>


            <FooterStyle1/>
        </>
    )
}

export default sliderPage
