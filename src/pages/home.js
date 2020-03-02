import React from "react"
import BannerImg from "../images/bg/bg.jpg"

import Skills from "../components/Skills"

import Header from "../components/Header"
import Banner from "../components/Banner"
import SectionTitle from "../components/SectionTitle"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
import About from "../components/About"

import {FaPhone, FaEnvelope} from "react-icons/fa"
import AboutBg from "../images/bg/About-bg.jpg"
import Resume from "../resume/WootaeResume.pdf"
import ContactForm from "../components/ContactForm"
const Home = () => {
  return (
    <>
      <Header />
      <Banner bannerstyle="text-center" bgImg={BannerImg}>
        <div className="banner-text">
          <h1 className="heading-tag">
          Wootae Yang
          </h1>
          <p className="heading-tag">
          Software Developer || Outdoors Enthusiast
          </p>
          <a href={Resume} className="btn btn-primary">
          View Resume
          </a>
        </div>
      </Banner>

      {/* Start Portfolio Section*/}
      <section className="pad-t80 pad-b50 whitespace-section" id="portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Portfolio" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 portfolio-section">
              <Portfolio />
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section*/}

      {/* Start About Section*/}
      <section
            id="about"
            className="pad80 parallax"
            style={{ backgroundImage: `url(${AboutBg})` }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="About Me" titleStyle="white" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <About textStyle="white"/>
                    </div>
                </div>
                </div>
            </section>
      {/* End About Section*/}

      {/* Start Skill Section*/}
      <section className="skill-section pad80" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Skills & Technologies" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Skills />
            </div>
          </div>
        </div>
      </section>
      {/* End Skill Section*/}

      {/* Start Contact Section */}
      <section className="pad-t100 pad-b50 contact-section" id="contact">
        <div className="row">
          <div className="col-md-12">
            <SectionTitle title="How to reach me" />
          </div>
        </div>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="feature-9 text-center">
                          <span><FaPhone /></span>
                          <h4>Call</h4>
                          <p>617-990-6178</p>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="feature-9 text-center">
                          <span><FaEnvelope /></span>
                          <h4>E-mail</h4>
                          <a href="mailto:wyang19a@gmail.com">wyang19a@gmail.com</a>
                      </div>
                  </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h5 className="text-center" style={{ opacity: '0.7' }}>or, use the form below!</h5>
                  <br/>
                </div>
              </div>
           </div>
           <ContactForm />
      </section>
      {/* End Contact Section*/}
      {/* Start Footer Section*/}
      <Footer />
      {/* End FOoter Section*/}
    </>
  )
}

export default Home
