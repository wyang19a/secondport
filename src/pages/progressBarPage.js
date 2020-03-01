import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import FooterStyle1 from '../components/Footer/FooterStyle1'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import ProgressBar from '../components/ProgressBar'

const ProgressBarPage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Progress Bar" />

            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Progress Bar" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <ProgressBar width="60"/>
                        </div>
                        <div className="col-md-6 mb-5">
                            <ProgressBar width="80"/>
                        </div>
                        <div className="col-md-6 mb-5">
                            <ProgressBar width="80"/>
                        </div>
                        <div className="col-md-6 mb-5">
                            <ProgressBar width="60"/>
                        </div>
                    </div>
                </div>
            </section>

            <FooterStyle1/>
        </>
    )
}

export default ProgressBarPage
