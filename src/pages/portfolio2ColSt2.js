import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'
import PortfolioCol2Style2 from '../components/Portfolio/PortfolioCol2Style2'
import FooterStyle1 from '../components/Footer/FooterStyle1'

const Portfolio2ColSt1 = () => {
    return (
        <>
           <HeaderStyle1 />
           <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Pages" pageTitle="Portfolio" />

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
                        <PortfolioCol2Style2 />
                    </div>
                </div>
                </div>
            </section>
            {/* End Portfolio Section*/}

            <FooterStyle1 />

        </>
    )
}

export default Portfolio2ColSt1
