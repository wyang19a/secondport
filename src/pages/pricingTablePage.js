import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'
import FooterStyle1 from '../components/Footer/FooterStyle1'
import PricingTable from '../components/PricingTable'

const PricingTablePage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Pricing Table" />

            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Carousel" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <PricingTable/>
                        </div>
                    </div>
                </div>
            </section>


            <FooterStyle1/>
        </>
    )
}

export default PricingTablePage
