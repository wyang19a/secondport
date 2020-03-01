import React from "react"
import BannerImage from "../images/slideshow/banner-4.jpg"
import FeatureImg1 from "../images/others/img-8.jpg"
import FeatureImg2 from "../images/others/img-4.jpg"
import FeatureImg3 from "../images/others/img-9.jpg"
import Bg10 from "../images/bg/bg10.jpg"
import img2 from "../images/others/img-2.jpg"
import HumanImg from "../images/others/img-026.png"
import TeamImage2 from "../images/team/team2.jpg"
import TeamImage3 from "../images/team/team3.jpg"
import TeamImage5 from "../images/team/team5.jpg"
import Blog1 from "../images/others/img-4.jpg"
import Blog2 from "../images/others/img-8.jpg"
import Blog3 from "../images/others/img-9.jpg"

import HeaderStyle1 from "../components/Header/HeaderStyle1"
import Banner from "../components/Slideshow/Banner"
import FeaturesStyle5 from "../components/Features/FeaturesStyle5"
import FeatureStyle2 from "../components/Features/FeatureStyle2"
import CallToAction2 from "../components/CallToAction/CallToAction2"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import TeamStyle3 from "../components/Team/TeamStyle3"
import PricingTable from "../components/PricingTable"
import FooterStyle1 from "../components/Footer/FooterStyle1"

const Homepage7 = () => {
  return (
    <>
      <HeaderStyle1 />
      <Banner bannerstyle="white text-right" bgImg={BannerImage}>
        <h1>We are Expert</h1>
        <p>
          Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna
          justo, lacinia eget
          <br /> consectetur sed, convallis at tellus. Donec rutrum congue leo
          eget malesuada.
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

      {/* Start image content Service Section*/}
      <section
        className="pad-t80 pad-b50 parallax"
        style={{ backgroundImage: `url(${Bg10})`, position: "relative" }}
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
                  color: "#fff",
                }}
              >
                WE ARE Always HERE TO <br />
                PROVIDE Service
              </h3>
              <p style={{ color: "#fff" }}>
                Lorem ipsum dolor sit consectetur adipiscing elit. Quisque velit
                nisi pretium ut lacinia in, elementum id enim.
              </p>
              <div className="feature-list" style={{ marginTop: "40px" }}>
                <div className="row">
                  <div className="col-md-6">
                    <FeatureStyle2
                      featureStyle="white"
                      icon="icon-puzzle"
                      title="DESIGNED TO BE AMAZING"
                      text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                    />
                  </div>
                  <div className="col-md-6">
                    <FeatureStyle2
                      featureStyle="white"
                      icon="icon-mobile"
                      title="Industrial Services"
                      text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                    />
                  </div>
                  <div className="col-md-6">
                    <FeatureStyle2
                      featureStyle="white"
                      icon="icon-layers"
                      title="Startup Business Planning"
                      text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                    />
                  </div>
                  <div className="col-md-6">
                    <FeatureStyle2
                      featureStyle="white"
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

      {/* Start Text Section */}
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="text-section" style={{ marginTop: "80px" }}>
                <h4>
                  Why you will
                  <br />
                  Choose Revson
                </h4>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Nulla porttitor accumsan tincidunt. Curabitur aliquet
                  quam id dui posuere blandit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim.
                </p>
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li icon-aperture"></i>Interdum et malesuada
                    fames ac ante
                  </li>
                  <li>
                    <i className="fa-li icon-aperture"></i>Malesuada fames ac
                    ante ipsum
                  </li>
                  <li>
                    <i className="fa-li icon-aperture"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                </p>
                <a href="#" className="btn btn-primary">
                  Know More
                </a>
              </div>
            </div>
            <div className="col-md-4 ml-auto">
              <div className="mbl-margin-top text-center">
                <img src={HumanImg} alt="theshahriyar" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Text Section */}

      {/* Start Call to Action Section*/}
      <CallToAction2 bgColor="#222" paddingClass="pad80"></CallToAction2>
      {/* End Call to Action Section*/}

      {/* Start Team Member Section */}
      <section className="pad80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Team Member" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <TeamStyle3
                memberImg={TeamImage2}
                title="John Doe"
                designation="CEO"
                fbLink="#"
                twitterLink="#"
                linkedInLink="#"
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <TeamStyle3
                memberImg={TeamImage3}
                title="John Doe"
                designation="CEO"
                fbLink="#"
                twitterLink="#"
                linkedInLink="#"
              />
            </div>
            <div className="col-md-4 col-sm-4">
              <TeamStyle3
                memberImg={TeamImage5}
                title="John Doe"
                designation="CEO"
                fbLink="#"
                twitterLink="#"
                linkedInLink="#"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Team Member Section */}

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

      <FooterStyle1 />
    </>
  )
}

export default Homepage7
