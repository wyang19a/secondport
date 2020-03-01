import React from "react"
import BannerImg from "../images/slideshow/banner-2.jpg"



import HeaderStyle1 from "../components/Header/HeaderStyle1"
import Banner from "../components/Slideshow/Banner"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import PortfolioCol4Style2 from "../components/Portfolio/PortfolioCol4Style2"
import FooterStyle2 from "../components/Footer/FooterStyle2"
import Testimonial from "../components/Testimonial"

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

      {/* Start FOoter Section*/}
      <FooterStyle2 />
      {/* End FOoter Section*/}
    </>
  )
}

export default Homepage6
