import React from "react"
import { Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"

const Navs = ({ navStyle }) => {
  return (
    <ul className={`navbar-nav ${navStyle}`}>
      <li className="nav-item drop">
        <Link
          to="/homepage1"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
        >
          Homepage
        </Link>
        <ul className="drop-down" aria-labelledby="navbarDropdown">
          <li>
            <Link to="/homepage1" activeClassName="active">
              Homepage 1
            </Link>
          </li>
          <li>
            <Link to="/homepage2" activeClassName="active">
              Homepage 2
            </Link>
          </li>
          <li>
            <Link to="/homepage3" activeClassName="active">
              Homepage 3
            </Link>
          </li>
          <li>
            <Link to="/homepage4" activeClassName="active">
              Homepage 4
            </Link>
          </li>
          <li>
            <Link to="/homepage5" activeClassName="active">
              Homepage 5
            </Link>
          </li>
          <li>
            <Link to="/homepage6" activeClassName="active">
              Homepage 6
            </Link>
          </li>
          <li>
            <Link to="/homepage7" activeClassName="active">
              Homepage 7
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item drop">
        <Link to="/" className="nav-link">
          Features
        </Link>
        <ul className="drop-down">
          <li>
            <a href="#">
              Header
              <FaAngleRight />
            </a>
            <ul className="drop-down level3">
              <li>
                <Link to="/header1">Header 1</Link>
              </li>
              <li>
                <Link to="/header2">Header 2</Link>
              </li>
              <li>
                <Link to="/header3">Header 3</Link>
              </li>
              <li>
                <Link to="/header4">Header 4</Link>
              </li>
              <li>
                <Link to="/header5">Header 5</Link>
              </li>
              <li>
                <Link to="/header6">Header 6</Link>
              </li>
              <li>
                <Link to="/header7">Header 7</Link>
              </li>
              <li>
                <Link to="/header8">Header 8</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Slideshow
              <FaAngleRight />
            </a>
            <ul className="drop-down level3">
              <li>
                <Link to="/sliderbootstrap" activeClassName="active">
                  Bootstrap Slider
                </Link>
              </li>
              <li>
                <Link to="/banner1" activeClassName="active">
                  Banner 1
                </Link>
              </li>
              <li>
                <Link to="/banner2" activeClassName="active">
                  Banner 2
                </Link>
              </li>
              <li>
                <Link to="/banner3" activeClassName="active">
                  Banner 3
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Footer
              <FaAngleRight />
            </a>
            <ul className="drop-down level3">
              <li>
                <Link to="/footer1" activeClassName="active">
                  Footer 1
                </Link>
              </li>
              <li>
                <Link to="/footer2" activeClassName="active">
                  Footer 2
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="nav-item drop">
        <Link
          to="/aboutUs1"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
        >
          Pages
        </Link>
        <ul className="drop-down" aria-labelledby="navbarDropdown">
          <li>
            <Link to="/aboutUs1" activeClassName="active">
              About Us 1
            </Link>
          </li>
          <li>
            <Link to="/aboutUs2" activeClassName="active">
              About Us 2
            </Link>
          </li>
          <li>
            <Link to="/servicePage1" activeClassName="active">
              Service Page 1
            </Link>
          </li>
          <li>
            <Link to="/servicePage2" activeClassName="active">
              Service Page 2
            </Link>
          </li>
          <li>
            <Link to="/teamMember" activeClassName="active">
              Team Member
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active">
              Contact Page
            </Link>
          </li>
          <li>
            <Link to="/faq" activeClassName="active">
              F.A.Q
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item drop">
        <Link
          to="/portfolio3ColSt1"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
        >
          Portfolio
        </Link>
        <ul className="drop-down" aria-labelledby="navbarDropdown">
          <li>
            <Link to="/portfolio2ColSt1" activeClassName="active">
              Portfolio 2 Col St 1
            </Link>
          </li>
          <li>
            <Link to="/portfolio2ColSt2" activeClassName="active">
              Portfolio 2 Col St 2
            </Link>
          </li>
          <li>
            <Link to="/portfolio3ColSt1" activeClassName="active">
              Portfolio 3 Col St 1
            </Link>
          </li>
          <li>
            <Link to="/portfolio3ColSt2" activeClassName="active">
              Portfolio 3 Col St 2
            </Link>
          </li>
          <li>
            <Link to="/portfolio4ColSt1" activeClassName="active">
              Portfolio 4 Col St 1
            </Link>
          </li>
          <li>
            <Link to="/portfolio4ColSt2" activeClassName="active">
              Portfolio 4 Col St 2
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item drop">
        <Link
          to="/blogPageRightSidebar"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
        >
          Blog
        </Link>
        <ul className="drop-down" aria-labelledby="navbarDropdown">
          <li>
            <Link to="/blogPageFullWidth" activeClassName="active">
              Blog Full Width
            </Link>
          </li>
          <li>
            <Link to="/blogPageLeftSidebar" activeClassName="active">
              Blog Left Sidebar
            </Link>
          </li>
          <li>
            <Link to="/blogPageRightSidebar" activeClassName="active">
              Blog Right Sidebar
            </Link>
          </li>
          <li>
            <Link to="/blogPostFullWidth" activeClassName="active">
              Single Full Width
            </Link>
          </li>
          <li>
            <Link to="/blogPostLeftSidebar" activeClassName="active">
              Single Left Sidebar
            </Link>
          </li>
          <li>
            <Link to="/blogPostRightSidebar" activeClassName="active">
              Single Right Sidebar
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item megadrop">
        <Link
          to="/alertPage"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
        >
          Elements
        </Link>
        <div className="megadrop-down">
          <div className="container">
            <div className="dropdown w-100">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <ul>
                    <li>
                      <Link to="/alertPage" activeClassName="active">
                        Alert
                      </Link>
                    </li>
                    <li>
                      <Link to="/accordionPage" activeClassName="active">
                        Accordion
                      </Link>
                    </li>
                    <li>
                      <Link to="/animatedCounterPage" activeClassName="active">
                        Animated Counter
                      </Link>
                    </li>
                    <li>
                      <Link to="/badgePage" activeClassName="active">
                        Badge
                      </Link>
                    </li>
                    <li>
                      <Link to="/blockquotePage" activeClassName="active">
                        Block Quote
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <ul>
                    <li>
                      <Link to="/spinnerPage" activeClassName="active">
                        Spinner
                      </Link>
                    </li>
                    <li>
                      <Link to="/sliderPage" activeClassName="active">
                        Carousel
                      </Link>
                    </li>
                    <li>
                      <Link to="/callToActionPage" activeClassName="active">
                        Call to Action
                      </Link>
                    </li>
                    <li>
                      <Link to="/clientPage" activeClassName="active">
                        Clients
                      </Link>
                    </li>
                    <li>
                      <Link to="/progressBarPage" activeClassName="active">
                        Progress Bar
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <ul>
                    <li>
                      <Link to="/dropcapPage" activeClassName="active">
                        Dropcap
                      </Link>
                    </li>
                    <li>
                      <Link to="/404" activeClassName="active">
                        Error
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" activeClassName="active">
                        F.A.Q
                      </Link>
                    </li>
                    <li>
                      <Link to="/featuresPage" activeClassName="active">
                        Feature Box
                      </Link>
                    </li>
                    <li>
                      <Link to="/piechartPage" activeClassName="active">
                        Pie Chart
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <ul className="last-child">
                    <li>
                      <Link to="/pricingTablePage" activeClassName="active">
                        Pricing Table
                      </Link>
                    </li>
                    <li>
                      <Link to="/teamMember" activeClassName="active">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/testimonialPage" activeClassName="active">
                        Testimonial
                      </Link>
                    </li>
                    <li>
                      <Link to="/typographyPage" activeClassName="active">
                        Typography
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="nav-item megadrop">
        <a
          className="nav-link"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Contact
        </a>
        <div className="megadrop-down">
          <div className="container">
            <div className="dropdown w-100">
              <div className="row">
                <div className="col-md-8 col-sm-8">
                  <div id="map" style={{ height: "300px" }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10500.899077973729!2d2.2913514943457605!3d48.85392413737372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701f7e8337b5%3A0xa2cb58dd28914524!2sEiffel%20Tower%2C%20Paris%2C%20France!5e0!3m2!1sen!2sbd!4v1577514223123!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: "0" }}
                    ></iframe>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="menu-contact">
                    <div className="feature-2">
                      <div className="media">
                        <div className="media-left">
                          <div className="feature-icon text-center">
                            <i className="icon-map"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <a href="#">
                            <h3 className="media-heading">ADDRESS</h3>
                          </a>
                          <p>
                            Flat: 34/A, Plot: 345, City: Unknown, Country:
                            Unknown
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="feature-2">
                      <div className="media">
                        <div className="media-left">
                          <div className="feature-icon text-center">
                            <i className="icon-envelope"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <a href="#">
                            <h3 className="media-heading">E-mail</h3>
                          </a>
                          <p>email@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="feature-2" style={{ marginBottom: "0" }}>
                      <div className="media">
                        <div className="media-left">
                          <div className="feature-icon text-center">
                            <i className="icon-phone"></i>
                          </div>
                        </div>
                        <div className="media-body">
                          <a href="#">
                            <h3 className="media-heading">Phone</h3>
                          </a>
                          <p>+880123456789</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Navs
