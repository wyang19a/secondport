import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import FooterStyle1 from '../components/Footer/FooterStyle1'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import CallToAction from '../components/CallToAction/CallToAction'
import CallToAction3 from '../components/CallToAction/CallToAction3'
import CallToAction2 from '../components/CallToAction/CallToAction2'

const CallToActionPage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Carousel" />

            <section className="pad80">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Call to action" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-5">
                                <CallToAction />
                            </div>
                            <div className="mb-5">
                                <CallToAction3 />
                            </div>
                            <div className="mb-5">
                                <CallToAction2 bgColor="#ed1c24" btnSTyle="black" paddingClass="pad50" />
                            </div>
                            <div className="mb-5">
                                <CallToAction2 bgColor="#222" paddingClass="pad80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <FooterStyle1/>
        </>
    )
}

export default CallToActionPage
