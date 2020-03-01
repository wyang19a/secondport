import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import CountUp from 'react-countup'
import BG6 from "../images/bg/bg6.jpg"

const AnimatedCounterPage = () => {
    return (
        <>
           <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Animated Counter" />

            {/* Start Counter Section*/}
            <section className="pad-t80 pad-b50 parallax">
                <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 ">
                    <div className="animated-counter text-center">
                        <div className="animated-number">
                        <CountUp end={125} duration={10} />
                        </div>
                        <h4>Completed Projects</h4>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="animated-counter text-center">
                        <div className="animated-number">
                        <CountUp end={8285} duration={10} />
                        </div>
                        <h4>Coffee Ordered</h4>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="animated-counter text-center">
                        <div className="animated-number">
                        <CountUp end={2245} duration={10} />
                        </div>
                        <h4>Problem Solved</h4>
                    </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <div className="animated-counter text-center">
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


            {/* Start Counter Section*/}
            <section
                className="pad-t80 pad-b50 parallax"
                style={{
                backgroundColor: "#ed1c24",
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
        </>
    )
}

export default AnimatedCounterPage
