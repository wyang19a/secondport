import React from "react"
import BannerImg from "../images/slideshow/banner-2.jpg"

import Clients from "../components/Clients"

import HeaderStyle1 from "../components/Header/HeaderStyle1"
import Banner from "../components/Slideshow/Banner"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import PortfolioCol4Style2 from "../components/Portfolio/PortfolioCol4Style2"
import FooterStyle2 from "../components/Footer/FooterStyle2"
import Testimonial from "../components/Testimonial"

import {FaPhone, FaEnvelope} from "react-icons/fa"

const Homepage6 = () => {
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
          Find out more
          </a>
      </Banner>


      {/* Start Testimonial Section*/}
      <section
      className="pad80 parallax"
    >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="About me" />
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

      {/* Start Portfolio Section*/}
      <section className="pad-t80 pad-b50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Portfolio" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <PortfolioCol4Style2 />
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section*/}

      {/* Start Client Section*/}
      <section className="client-section pad80">
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
      {/* End Client Section*/}
      <section className="pad-t100 pad-b50">
        <div className="row">
          <div className="col-md-12">
            <SectionTitle title="Contact" />
          </div>
        </div>
           <div className="container">
               <div className="row">
                   <div className="col-md-6">
                       <div className="feature-9 text-center">
                           <span><FaPhone /></span>
                           <h4>Call Me</h4>
                           <p>617-990-6178</p>
                       </div>
                   </div>
                   <div className="col-md-6">
                       <div className="feature-9 text-center">
                           <span><FaEnvelope /></span>
                           <h4>E-mail Me</h4>
                           <a href="mailto:wyang19a@gmail.com">wyang19a@gmail.com</a>
                       </div>
                   </div>
               </div>
           </div>
       </section>
       <section className="pad80">
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

      {/* Start Footer Section*/}
      <FooterStyle2 />
      {/* End FOoter Section*/}
    </>
  )
}

export default Homepage6
