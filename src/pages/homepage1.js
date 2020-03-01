import React from "react"
import HeaderStyle1 from "../components/Header/HeaderStyle1"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import FeatureStyle1 from "../components/Features/FeatureStyle1"
import img2 from "../images/others/img-2.jpg"
import Human from "../images/others/02.png"
import BG6 from "../images/bg/bg6.jpg"
import BG2 from "../images/bg/bg2.jpg"
import FeatureStyle2 from "../components/Features/FeatureStyle2"
import CallToAction2 from "../components/CallToAction/CallToAction2"
import PortfolioCol3Style1 from "../components/Portfolio/PortfolioCol3Style1"
import CountUp from "react-countup"
import TeamStyle1 from "../components/Team/TeamStyle1"
import Blog1 from "../images/others/img-4.jpg"
import Blog2 from "../images/others/img-8.jpg"
import Blog3 from "../images/others/img-9.jpg"
import PricingTable from "../components/PricingTable"
import Testimonial from "../components/Testimonial"
import Clients from "../components/Clients"
import FooterStyle1 from "../components/Footer/FooterStyle1"
import BootstrapSlider from "../components/Slideshow/BootstrapSlider"

const Homepage1 = () => {
  return (
    <>
      <HeaderStyle1 />
      <BootstrapSlider />

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

      {/* Start image content Service Section*/}
      <section
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#f9f9f9", position: "relative" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4"></div>
            <div className="col-md-8 col-sm-8">
              <h3
                style={{
                  fontSize: "30px",
                  lineHeight: "40px",
                  margin: "0 0 10px",
                  textTransform: "uppercase",
                }}
              >
                WE ARE Always HERE TO <br />
                PROVIDE Service
              </h3>
              <p>
                Lorem ipsum dolor sit consectetur adipiscing elit. Quisque velit
                nisi pretium ut lacinia in, elementum id enim.
              </p>
              <div className="feature-list" style={{ marginTop: "40px" }}>
                <div className="row">
                  <div className="col-md-6">
                    <FeatureStyle2
                      icon="icon-puzzle"
                      title="DESIGNED TO BE AMAZING"
                      text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                    />
                  </div>
                  <div className="col-md-6">
                    <FeatureStyle2
                      icon="icon-mobile"
                      title="Industrial Services"
                      text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                    />
                  </div>
                  <div className="col-md-6">
                    <FeatureStyle2
                      icon="icon-layers"
                      title="Startup Business Planning"
                      text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                    />
                  </div>
                  <div className="col-md-6">
                    <FeatureStyle2
                      icon="icon-trophy"
                      title="Make company top"
                      text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="left-half width33"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundPosition: "-300px center",
          }}
        ></div>
      </section>
      {/* End image content Service Section*/}

      {/* Start Why Choose Us Section Section*/}
      <section className="pad-t80">
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

      {/* Start Call to Action Section*/}
      <CallToAction2 bgColor="#222" paddingClass="pad80"></CallToAction2>
      {/* End Call to Action Section*/}

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
              <PortfolioCol3Style1 />
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section*/}

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

      {/* Start Team Section*/}
      <section className="pad80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Team Member" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TeamStyle1 />
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section*/}

      {/* Start Latest News Section*/}
      <section
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Latest News" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="latest-news">
                <div className="latest-news-img">
                  <img src={Blog1} alt="blog-post" />
                  <div>
                    <span>Aug</span>
                    <span>06</span>
                  </div>
                </div>
                <h4>
                  <a href="#">
                    Lorem Ipsum is dummy text of type setting industry.
                  </a>
                </h4>
                <p>
                  Vivamus magna justo, lacinia eget consectetur convallis at
                  tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="latest-news">
                <div className="latest-news-img">
                  <img src={Blog2} alt="blog-post" />
                  <div>
                    <span>Aug</span>
                    <span>07</span>
                  </div>
                </div>
                <h4>
                  <a href="#">
                    Lorem Ipsum is dummy text of type setting industry.
                  </a>
                </h4>
                <p>
                  Vivamus magna justo, lacinia eget consectetur convallis at
                  tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="latest-news">
                <div className="latest-news-img">
                  <img src={Blog3} alt="blog-post" />
                  <div>
                    <span>Aug</span>
                    <span>08</span>
                  </div>
                </div>
                <h4>
                  <a href="#">
                    Lorem Ipsum is dummy text of type setting industry.
                  </a>
                </h4>
                <p>
                  Vivamus magna justo, lacinia eget consectetur convallis at
                  tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Latest News Section*/}

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

export default Homepage1
