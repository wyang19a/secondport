import React from 'react'
import Banner from '../components/Slideshow/Banner'
import BannerImg from "../images/slideshow/banner-2.jpg"
import Human from "../images/others/02.png"
import BG2 from "../images/bg/bg2.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'
import FeatureStyle1 from '../components/Features/FeatureStyle1'
import FeatureStyle2 from '../components/Features/FeatureStyle2'
import Testimonial from '../components/Testimonial'
import Clients from '../components/Clients'
import FooterStyle1 from '../components/Footer/FooterStyle1'
import HeaderStyle2 from '../components/Header/HeaderStyle2'

const Header7 = () => {
    return (
        <>
            <HeaderStyle2 headerStyle="dark-color" />
            <Banner bannerstyle="text-center" bgImg={BannerImg}>
                <h1>
                Welcome to <span>Revson</span>
                </h1>
                <p>
                Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
                <br /> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet
                elit, eget tincidunt nibh pulvinar.
                </p>
                <a href="#" className="btn btn-primary">
                Discover More
                </a>
            </Banner>

            {/* Start Welcome Section */}
            <section className="pad-t80 pad-b50">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="Welcome to Revson" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <FeatureStyle1
                        title1="Story"
                        title2="History"
                        number="01"
                        text="Vivamus magna justo, lacinia eget consect sed, convallis at tellus. Lorem ipsum dolor consectetur adipiscing elit."
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle1
                        title1="Goal"
                        title2="Mission"
                        number="02"
                        text="Vivamus magna justo, lacinia eget consect sed, convallis at tellus. Lorem ipsum dolor consectetur adipiscing elit."
                    />
                    </div>
                    <div className="col-md-4">
                    <FeatureStyle1
                        title1="Target"
                        title2="Success"
                        number="03"
                        text="Vivamus magna justo, lacinia eget consect sed, convallis at tellus. Lorem ipsum dolor consectetur adipiscing elit."
                    />
                    </div>
                </div>
                </div>
            </section>
            {/* End Welcome Section */}

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

            {/* Start Testimonial Section*/}
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
            {/* End Testimonial Section*/}

            {/* Start Client Section*/}
            <section className="client-section pad80">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="Our Client's" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <Clients />
                    </div>
                </div>
                </div>
            </section>
            {/* End Client Section*/}

            {/* Start Footer Section*/}
            <FooterStyle1 />
            {/* End Footer Section*/}
        </>
    )
}

export default Header7
