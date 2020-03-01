import React from "react"
import HeaderStyle2 from "../components/Header/HeaderStyle2"
import Banner from "../components/Slideshow/Banner"
import BannerImg from "../images/slideshow/banner-2.jpg"

import FeatureImg1 from "../images/others/img-8.jpg"
import FeatureImg2 from "../images/others/img-4.jpg"
import FeatureImg3 from "../images/others/img-9.jpg"
import Bg1 from "../images/bg/bg1.jpg"
import Bg2 from "../images/bg/bg2.jpg"
import BG6 from "../images/bg/bg6.jpg"
import Img1 from "../images/others/img-1.jpg"

import FeaturesStyle5 from "../components/Features/FeaturesStyle5"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import ProgressBar from "../components/ProgressBar"
import FeatureStyle2 from "../components/Features/FeatureStyle2"
import FeatureStyle4 from "../components/Features/FeatureStyle4"
import CountUp from "react-countup"
import PortfolioCol3Style2 from "../components/Portfolio/PortfolioCol3Style2"
import CallToAction2 from "../components/CallToAction/CallToAction2"
import PricingTable from "../components/PricingTable"
import LatestNewsCarousel from "../components/LatestNews/LatestNewsCarousel"
import Testimonial from "../components/Testimonial"
import Clients from "../components/Clients"
import FooterStyle1 from "../components/Footer/FooterStyle1"

const Homepage2 = () => {
  return (
    <>
      <HeaderStyle2 headerStyle="boxed-width dark-color" />
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

      {/* Start Feature Section */}
      <section style={{ backgroundColor: "#f2f2f2" }}>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-4"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <FeaturesStyle5
                title="Our Mission"
                icon="icon-layers"
                bgImg={FeatureImg1}
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
              />
            </div>
            <div
              className="col-md-4"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <FeaturesStyle5
                title="Our Vision"
                icon="icon-lightbulb"
                bgImg={FeatureImg2}
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
              />
            </div>
            <div
              className="col-md-4"
              style={{ paddingLeft: "0", paddingRight: "0" }}
            >
              <FeaturesStyle5
                title="Our Success"
                icon="icon-trophy"
                bgImg={FeatureImg3}
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Section */}

      {/* Start About Us Section */}
      <section className="pad80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Who we are" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p style={{ textAlign: "right" }}>
                Donec sollicitudin molestie malesuada. Praesent sapien massa,
                convallis a pellentesque nec, egestas non nisi. Donec
                sollicitudin molestie malesuada. Nulla porttitor accumsan
                tincidunt. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Sed porttitor lectus nibh.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Donec sollicitudin molestie malesuada. Praesent sapien massa,
                convallis a pellentesque nec, egestas non nisi. Donec
                sollicitudin molestie malesuada. Nulla porttitor accumsan
                tincidunt. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Sed porttitor lectus nibh.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="skill-section" style={{ marginTop: "40px" }}>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Web Design</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">HTML5</span>
                    <ProgressBar width="95" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-section" style={{ marginTop: "40px" }}>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">CSS3</span>
                    <ProgressBar width="85" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">JavaScript</span>
                    <ProgressBar width="80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}

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

      {/* Start Work Flow Section */}
      <section className="pad80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Our Working Process" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="template-image mbl-margin-bottom">
                <img className="img-fluid" src={Img1} alt="Shahriyar Ahmed" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="working-process-box">
                <FeatureStyle4
                  icon="icon-layers"
                  title="Discuss About Project"
                  text="Nulla facilisi curabitur iaculis accumsan augue, ex ea commodo consequat nec finibus mauris pretium eu."
                />
                <FeatureStyle4
                  icon="icon-linegraph"
                  title="Analyze Design & COncept"
                  text="Nulla facilisi curabitur iaculis accumsan augue, ex ea commodo consequat nec finibus mauris pretium eu."
                />
                <FeatureStyle4
                  icon="icon-circle-compass"
                  title="Write code for project"
                  text="Nulla facilisi curabitur iaculis accumsan augue, ex ea commodo consequat nec finibus mauris pretium eu."
                />
                <FeatureStyle4
                  icon="icon-beaker"
                  title="Test project with few method"
                  text="Nulla facilisi curabitur iaculis accumsan augue, ex ea commodo consequat nec finibus mauris pretium eu."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Work Flow Section */}

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
              <PortfolioCol3Style2 />
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section*/}

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

      {/* Start Latest News Section*/}
      <LatestNewsCarousel />
      {/* End Latest News Section*/}

      {/* Start Testimonial Section*/}
      <section
      className="pad80 parallax"
      style={{ backgroundImage: `url(${Bg2})` }}
    >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="What people say" titleStyle="white" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Testimonial textStyle="white" />
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

export default Homepage2
