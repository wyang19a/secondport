import React from "react"
import TopHeader from "./TopHeader"
import Logo from "../../images/logo/logo.png"
import NavbarStyle2 from "../Navbar/NavbarStyle2"
import { Link } from "gatsby"

const HeaderStyle2 = ({ headerStyle }) => {
  return (
    <>
      <TopHeader />
      <section className="clearfix pad30">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link className="navbar-brand separate" to="/">
                <img alt="" src={Logo} />
              </Link>
            </div>
            <div className="col-md-3 hidden-xs">
              <div className="header-address pull-right">
                <a href="#">
                  <i className="icon-map"></i>
                </a>
                <div className="header-content">
                  <h5>Want to meet us</h5>
                  <p>123 California, USA</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden-xs">
              <div className="header-address pull-right">
                <a href="#">
                  <i className="icon-phone"></i>
                </a>
                <div className="header-content">
                  <h5>Feel free to call us</h5>
                  <p>+8807776575656</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 hidden-xs">
              <div className="header-address pull-right">
                <a href="#">
                  <i className="icon-clock"></i>
                </a>
                <div className="header-content">
                  <h5>Our Office Time</h5>
                  <p>Mon - Sat (9:00am - 10:00pm)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NavbarStyle2 navbarStyle={headerStyle} />
    </>
  )
}

export default HeaderStyle2
