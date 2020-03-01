import React from "react"

import Img9 from "../images/others/img-9.jpg"
import Img5 from "../images/others/img-9.jpg"
import Img4 from "../images/others/img-9.jpg"
import Img2 from "../images/others/img-2.jpg"
import Portfolio1 from "../images/portfolio/port1.jpg"
import Portfolio2 from "../images/portfolio/port2.jpg"
import Portfolio3 from "../images/portfolio/port3.jpg"
import Portfolio4 from "../images/portfolio/port4.jpg"
import Portfolio5 from "../images/portfolio/port5.jpg"
import Portfolio6 from "../images/portfolio/port6.jpg"
import TeamImg3 from "../images/team/3.png"
import TeamImg6 from "../images/team/6.png"
import TeamImg5 from "../images/team/5.png"
import NewsImg1 from "../images/latest-blog/latest-blog-1.jpg"
import NewsImg2 from "../images/latest-blog/latest-blog-2.jpg"
import NewsImg3 from "../images/latest-blog/latest-blog-3.jpg"

import {
  FaDropbox,
  FaGlobeAsia,
  FaPlaneDeparture,
  FaTruckMoving,
  FaRegHandLizard,
  FaUserSecret,
} from "react-icons/fa"

import HeaderStyle1 from "../components/Header/HeaderStyle1"
import BootstrapSlider from "../components/Slideshow/BootstrapSlider"
import CallToAction2 from "../components/CallToAction/CallToAction2"
import FeatureStyle6 from "../components/Features/FeatureStyle6"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import FeatureStyle7 from "../components/Features/FeatureStyle7"
import TeamStyle4 from "../components/Team/TeamStyle4"
import Clients from "../components/Clients"
import FooterStyle1 from "../components/Footer/FooterStyle1"
import Testimonial from "../components/Testimonial"

const Homepage4 = () => {
  return (
    <>
      <HeaderStyle1 />
      <BootstrapSlider />
      <CallToAction2 bgColor="#ed1c24" btnSTyle="black" paddingClass="pad50" />
      {/* Start Welcome Section */}
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <FeatureStyle6
                image={Img9}
                title="Praesent sapien massa"
                text="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada."
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle6
                image={Img5}
                title="Convallis pellentes nec"
                text="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle6
                image={Img4}
                title="Donec sollicitudin molestie"
                text="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada."
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Welcome Section */}

      {/* Start About Us Section */}
      <section className="pad80" style={{ backgroundColor: "#f3f3f3" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <SectionTitle
                titleStyle="left"
                title="ABOUT US AND OUR PRIORITIES"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="row mbl-margin-bottom">
                <div className="col-md-6">
                  <FeatureStyle7
                    icon={<FaDropbox />}
                    title="Packaging"
                    subtitle="We package &amp; store"
                  />
                </div>
                <div className="col-md-6">
                  <FeatureStyle7
                    icon={<FaGlobeAsia />}
                    title="Worldwide"
                    subtitle="Everywhere"
                  />
                </div>
                <div className="col-md-6">
                  <FeatureStyle7
                    icon={<FaPlaneDeparture />}
                    title="Plane"
                    subtitle="Faster With Plane"
                  />
                </div>
                <div className="col-md-6">
                  <FeatureStyle7
                    icon={<FaTruckMoving />}
                    title="Transporting"
                    subtitle="We Fast Transport"
                  />
                </div>
                <div className="col-md-6">
                  <FeatureStyle7
                    icon={<FaRegHandLizard />}
                    title="Hand to Hand"
                    subtitle="Secure Transport"
                  />
                </div>
                <div className="col-md-6">
                  <FeatureStyle7
                    icon={<FaUserSecret />}
                    title="Secure"
                    subtitle="We Gurantee"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <img src={Img2} alt="" className="w-100" />
              <h4
                style={{
                  marginTop: "30px",
                  marginBottom: "15px",
                  fontSize: "18px",
                }}
              >
                Who We Are
              </h4>
              <p>
                Proin eget tortor risus. Donec sollicitudin molestie malesuada.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}

      {/* Start Portfolio Section */}
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Our Gallery" />
            </div>
          </div>
          <div className="row portfolio-box">
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-post mb30">
                <img src={Portfolio1} alt="theshahriyar" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <a className="zoom" href="#">
                      <i className="icon-attachment"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-post mb30">
                <img src={Portfolio2} alt="theshahriyar" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <a className="zoom" href="#">
                      <i className="icon-attachment"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-post mb30">
                <img src={Portfolio3} alt="theshahriyar" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <a className="zoom" href="#">
                      <i className="icon-attachment"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-post mb30">
                <img src={Portfolio4} alt="theshahriyar" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <a className="zoom" href="#">
                      <i className="icon-attachment"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-post mb30">
                <img src={Portfolio5} alt="theshahriyar" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <a className="zoom" href="#">
                      <i className="icon-attachment"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="portfolio-post mb30">
                <img src={Portfolio6} alt="theshahriyar" />
                <div className="hover-box">
                  <div className="inner-hover">
                    <a className="zoom" href="#">
                      <i className="icon-attachment"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}

      {/* Start Team Member Section */}
      <section
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Who work for you" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <TeamStyle4
                teamImg={TeamImg3}
                name="John Doe"
                designation="CEO & Founder"
                details="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
              />
            </div>
            <div className="col-md-4">
              <TeamStyle4
                teamImg={TeamImg6}
                name="Alex Doe"
                designation="Consultant"
                details="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue malesuada. Vestibulum ac diam sit amet quam."
              />
            </div>
            <div className="col-md-4">
              <TeamStyle4
                teamImg={TeamImg5}
                name="John Smith"
                designation="Manager"
                details="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Team Member Section */}

      {/* Start Testimonial Section*/}
      <section
      className="pad80 parallax"
    >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="What people say" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Testimonial/>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial Section*/}

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
                  <img src={NewsImg1} alt="blog-post" />
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
                  <img src={NewsImg3} alt="blog-post" />
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
                  <img src={NewsImg2} alt="blog-post" />
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

export default Homepage4
