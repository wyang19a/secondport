import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import FooterStyle1 from '../components/Footer/FooterStyle1'
import ReactMinimalPieChart from "react-minimal-pie-chart"
import Bg6 from "../images/bg/bg6.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'

const PiechartPage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Pie Chart" />

            <section
                className="pad-t80 pad-b50 parallax my-5"
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


            <FooterStyle1/>
        </>
    )
}

export default PiechartPage
