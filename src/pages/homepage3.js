import React from "react"
import BannerImg from "../images/slideshow/banner-2.jpg"
import Img9 from "../images/others/img-9.jpg"
import Img5 from "../images/others/img-9.jpg"
import Img4 from "../images/others/img-9.jpg"
import Human from "../images/others/02.png"
import ParalaxBg from "../images/bg/parallax2.jpg"
import Bg8 from "../images/bg/bg8.jpg"
import Team1 from "../images/team/team1.jpg"
import Team2 from "../images/team/team2.jpg"
import Team3 from "../images/team/team3.jpg"
import Team4 from "../images/team/team4.jpg"

import { FaCheckCircle } from "react-icons/fa"

import HeaderStyle2 from "../components/Header/HeaderStyle2"
import Banner from "../components/Slideshow/Banner"
import FeatureStyle6 from "../components/Features/FeatureStyle6"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import FeatureStyle9 from "../components/Features/FeatureStyle9"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import PortfolioCol3Style2 from "../components/Portfolio/PortfolioCol3Style2"
import CallToAction from "../components/CallToAction/CallToAction"
import TeamStyle2 from "../components/Team/TeamStyle2"
import FooterStyle1 from "../components/Footer/FooterStyle1"
import Testimonial from "../components/Testimonial"

const Homepage3 = () => {
  return (
    <>
      <HeaderStyle2 headerStyle="boxed-width primary-color" />
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

      {/* Start Feature Section */}
      <section
        className="pad-t80 pad-b30 parallax"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Revson's Features" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <FeatureStyle9
                featureStyle="text-center"
                icon="icon-layers"
                title="labore et dolore"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle9
                featureStyle="text-center"
                icon="icon-aperture"
                title="labore et dolore"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle9
                featureStyle="text-center"
                icon="icon-genius"
                title="labore et dolore"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle9
                featureStyle="text-center"
                icon="icon-beaker"
                title="labore et dolore"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle9
                featureStyle="text-center"
                icon="icon-bargraph"
                title="labore et dolore"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
              />
            </div>
            <div className="col-md-4">
              <FeatureStyle9
                featureStyle="text-center"
                icon="icon-puzzle"
                title="labore et dolore"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Section */}

      {/* Start Accordion Section */}
      <section className="" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="revson-accordion pad-t80 pad-b50">
                <Accordion defaultActiveKey="1">
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      ACCORDION TITLE GOES HERE
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        Mauris blandit aliquet elit, eget tincidunt nibh
                        pulvinar a. Vestibulum ante ipsum primis in faucibus
                        orci luctus et ultrices posuere cubilia Curae; Donec
                        velit neque, auctor sit amet aliquam vel, ullamcorper
                        sit amet ligula. Curabitur non nulla sit amet nisl
                        tempus convallis quis ac lectus. Praesent sapien massa,
                        convallis a pellentesque nec, egestas non nisi.
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Cras ultricies ligula sed magna dictum
                        porta. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. Donec sollicitudin molestie
                        malesuada. Cras ultricies ligula sed magna dictum porta.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Donec velit neque,
                        auctor sit amet aliquam vel, ullamcorper sit amet
                        ligula.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                      LANNISTER ALWAYS PAYS HIS DEBTS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec iaculis metus vitae ligula elementum ut luctus
                        lorem facilisis. Sed non leo nisl, ac euismod nisi.
                        Aenean augue dolor, facilisis id fringilla ut, tempus
                        vitae nibh.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                      LANNISTER ALWAYS PAYS HIS DEBTS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec iaculis metus vitae ligula elementum ut luctus
                        lorem facilisis. Sed non leo nisl, ac euismod nisi.
                        Aenean augue dolor, facilisis id fringilla ut, tempus
                        vitae nibh.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                      LANNISTER ALWAYS PAYS HIS DEBTS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec iaculis metus vitae ligula elementum ut luctus
                        lorem facilisis. Sed non leo nisl, ac euismod nisi.
                        Aenean augue dolor, facilisis id fringilla ut, tempus
                        vitae nibh.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
            <div className="col-md-5">
              <div className="text-center">
                <img src={Human} alt="theshahriyar" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Accordion Section */}

      {/* Start image content Section */}
      <section
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#ed1c24", position: "relative" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div
                className="text-section white"
                style={{ paddingRight: "10%" }}
              >
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
                    <FaCheckCircle /> Interdum et malesuada fames ac ante
                  </li>
                  <li>
                    <FaCheckCircle /> Malesuada fames ac ante ipsum
                  </li>
                  <li>
                    <FaCheckCircle /> Nam blandit quam nibh, at fermentum
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                </p>
                <a href="#" className="btn btn-primary white">
                  Know More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6"></div>
          </div>
        </div>
        <div
          className="right-half width50"
          style={{ backgroundImage: `url(${ParalaxBg})` }}
        ></div>
      </section>
      {/* End image content Section */}

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

      {/* Start Call to action Section*/}
      <CallToAction />
      {/* End Call to action Section*/}

      {/* Start Team Member Section*/}
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Team Member" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
                <TeamStyle2 teamImage={Team1} name="Mr. John Doe" designation="Web Developer" fbLink="#" twLink="#" googleLink="#" otherLink="#" />
            </div>
            <div className="col-md-3 col-sm-6">
              <TeamStyle2 teamImage={Team2} name="Mr. John Doe" designation="Web Developer" fbLink="#" twLink="#" googleLink="#" otherLink="#" />
            </div>
            <div className="col-md-3 col-sm-6">
              <TeamStyle2 teamImage={Team3} name="Mr. John Doe" designation="Web Developer" fbLink="#" twLink="#" googleLink="#" otherLink="#" />
            </div>
            <div className="col-md-3 col-sm-6">
              <TeamStyle2 teamImage={Team4} name="Mr. John Doe" designation="Web Developer" fbLink="#" twLink="#" googleLink="#" otherLink="#" />
            </div>
        </div>
        </div>
      </section>
      {/* End Team Member Section*/}

      {/* Start Subscription Section*/}
      <section
        className="pad80 parallax"
        style={{
          backgroundImage: `url(${Bg8})`,
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

      {/* Start Footer Section*/}
      <FooterStyle1 />
      {/* End Footer Section*/}
    </>
  )
}

export default Homepage3
