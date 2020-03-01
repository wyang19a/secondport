import React from "react"
import ReactMinimalPieChart from "react-minimal-pie-chart"

import Bg5 from "../images/bg/bg5.jpg"
import Bg6 from "../images/bg/bg6.jpg"
import HumanImg from "../images/others/img-026.png"
import Bg9 from "../images/bg/bg9.jpg"
import Client1 from "../images/client/1.png"
import Client2 from "../images/client/2.png"
import Client3 from "../images/client/3.png"
import Client4 from "../images/client/4.png"
import Client5 from "../images/client/5.png"
import Client6 from "../images/client/6.png"

import HeaderStyle1 from "../components/Header/HeaderStyle1"
import BootstrapSlider from "../components/Slideshow/BootstrapSlider"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import FeatureStyle1 from "../components/Features/FeatureStyle1"
import FeatureStyle2 from "../components/Features/FeatureStyle2"
import FeatureStyle3 from "../components/Features/FeatureStyle3"
import CallToAction3 from "../components/CallToAction/CallToAction3"
import PortfolioCol3Style1 from "../components/Portfolio/PortfolioCol3Style1"
import FooterStyle1 from "../components/Footer/FooterStyle1"
import Testimonial from "../components/Testimonial"

const Homepage5 = () => {
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

      {/* Start Feature Section */}
      <section
        className="pad-t80 pad-b50 parallax"
        style={{ backgroundImage: `url(${Bg5})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Revson's Features" titleStyle="white" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <FeatureStyle2
                title="Nulla porttitor accumsan"
                text="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan."
                icon="icon-clock"
                featureStyle="white"
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle2
                title="Vestibulum ac diam sit"
                text="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit."
                icon="icon-aperture"
                featureStyle="white"
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle2
                title="Praesent sapien massa"
                text="Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus."
                icon="icon-layers"
                featureStyle="white"
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle2
                title="Pellentesque in ipsum"
                text="Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit."
                icon="icon-genius"
                featureStyle="white"
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle2
                title="Cras ultricies ligula sed"
                text="Lorem ipsum dolor sit amet, consect adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum."
                icon="icon-beaker"
                featureStyle="white"
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle2
                title="Lorem ipsum dolor sit"
                text="Curabitur aliquet quam id dui posuere blandit. Cras ultricies ligula sed magna dictum porta."
                icon="icon-bargraph"
                featureStyle="white"
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle2
                title="NULLA PORTTITOR ACCUMSAN"
                text="Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan."
                icon="icon-puzzle"
                featureStyle="white"
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle2
                title="VESTIBULUM AC DIAM SIT"
                text="Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit."
                icon="icon-trophy"
                featureStyle="white"
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle2
                title="PELLENTESQUE IN IPSUM"
                text="Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit."
                icon="icon-lifesaver"
                featureStyle="white"
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Section */}

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

      {/* Start Progressive chart Section */}
      <section
        className="pad-t80 pad-b50 parallax"
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
      {/* End Progressive chart Section */}

      {/* Start Features Section */}
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="More Services" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <FeatureStyle3
                bgColor="#f2f2f2"
                featureStyle="text-center"
                icon="icon-layers"
                title="labore et dolore"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
              />
            </div>
            <div className="col-md-6">
              <FeatureStyle3
                bgColor="#f2f2f2"
                featureStyle="text-center"
                icon="icon-trophy"
                title="ipsum dolor sit"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
              />
            </div>
            <div className="col-md-6">
              <FeatureStyle3
                bgColor="#f2f2f2"
                featureStyle="text-center"
                icon="icon-genius"
                title="amet quam vehicula"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
              />
            </div>
            <div className="col-md-6">
              <FeatureStyle3
                bgColor="#f2f2f2"
                featureStyle="text-center"
                icon="icon-puzzle"
                title="ligula sed magna"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Features Section */}

      {/* Start Call to action Section */}
      <CallToAction3 />
      {/* End Call to action Section */}

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

      {/* Start Subscription Section*/}
      <section
        className="pad80 parallax"
        style={{
          backgroundImage: `url(${Bg9})`,
          backgroundPosition: "50% 80%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="subscription-section text-center">
                <h3>Want to Get Service News ?</h3>
                <p>
                  Cras ultricies ligula sed magna dictum porta. Vestibulum ac
                  diam sit amet quam vehicula elementum sed sit amet dui. Sed
                  porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi.
                </p>
                <form>
                  <div className="form-group subscribe-form">
                    <input
                      type="email"
                      className="form-control"
                      id="Email1"
                      placeholder="Subscribe with us"
                    />
                    <button type="submit" className="btn btn-default">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Subscription Section*/}

      {/* Start Testimonial Section*/}
      <section className="pad80 parallax" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="What People Say" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mbl-margin-bottom">
              <ul className="logo-group width33">
                <li className="client-logo">
                  <a href="#">
                    <img src={Client1} alt="Client's Logo" />
                  </a>
                </li>
                <li className="client-logo">
                  <a href="#">
                    <img src={Client2} alt="Client's Logo" />
                  </a>
                </li>
                <li className="client-logo">
                  <a href="#">
                    <img src={Client3} alt="Client's Logo" />
                  </a>
                </li>
                <li className="client-logo">
                  <a href="#">
                    <img src={Client4} alt="Client's Logo" />
                  </a>
                </li>
                <li className="client-logo">
                  <a href="#">
                    <img src={Client5} alt="Client's Logo" />
                  </a>
                </li>
                <li className="client-logo">
                  <a href="#">
                    <img src={Client6} alt="Client's Logo" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <Testimonial/>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonial Section*/}

      {/* Start Footer Section*/}
      <FooterStyle1 />
      {/* End Footer Section*/}
    </>
  )
}

export default Homepage5
