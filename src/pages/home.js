import React from "react"
import BannerImg from "../images/bg/bg.jpg"

import Clients from "../components/Clients"

import HeaderStyle1 from "../components/Header/HeaderStyle1"
import Banner from "../components/Slideshow/Banner"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import Portfolio from "../components/Portfolio/Portfolio"
import FooterStyle2 from "../components/Footer/FooterStyle2"
import Testimonial from "../components/Testimonial"

import {FaPhone, FaEnvelope} from "react-icons/fa"
import TestiBg from "../images/testimonials/testi-bg.jpg"

const Home = () => {
  return (
    <>
      <HeaderStyle1 />
      <Banner bannerstyle="text-center" bgImg={BannerImg}>
          <h1>
          Wootae Yang
          </h1>
          <p>
          Software Developer || Outdoors enthusiast
          </p>
          <a href="#" className="btn btn-primary">
          View Resume
          </a>
      </Banner>

      {/* Start Portfolio Section*/}
      <section className="pad-t80 pad-b50" id="portfolio">
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

      {/* Start Testimonial Section*/}
      <section
            id="about"
            className="pad80 parallax"
            style={{ backgroundImage: `url(${TestiBg})` }}
            >
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="About Me" titleStyle="white" />
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
              <Clients />
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
           <div className="container">
               <div className="col-md-12">
                   <form id="contactForm" className="contact-form" method="post">

                       <div className="messages"></div>

                       <div className="controls">

                           <div className="row">
                               <div className="col-md-6">
                                   <div className="form-group">
                                       <input id="form_name" type="text" name="name" className="form-control" placeholder="Name *" required="required" />
                                   </div>
                                   <div className="form-group">
                                       <input id="form_email" type="email" name="email" className="form-control" placeholder="Email *" required="required" />
                                   </div>
                                   <div className="form-group">
                                       <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone"/>
                                   </div>
                                   <div className="form-group">
                                       <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject *" required="required" />
                                   </div>
                               </div>
                               <div className="col-md-6">
                                   <div className="form-group">
                                       <textarea id="form_message" name="message" className="form-control" placeholder="Message *" required="required" style={{minHeight: "175px"}}></textarea>
                                   </div>
                                   <input type="submit" className="btn btn-primary" value="Send message" />
                               </div>
                           </div>

                           <div className="row">
                               <div className="col-md-12">
                                   <p className="text-muted"><strong>*</strong> These fields are required.</p>
                               </div>
                           </div>
                       </div>

                   </form>
               </div>
           </div>
      </section>
      {/* End Contact Section*/}
      {/* Start Footer Section*/}
      <FooterStyle2 />
      {/* End FOoter Section*/}
    </>
  )
}

export default Home
