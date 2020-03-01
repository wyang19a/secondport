import React from "react"
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import Nav from "react-bootstrap/Nav"
import Team1 from "../../images/team/team1.jpg"
import Team2 from "../../images/team/team2.jpg"
import Team3 from "../../images/team/team3.jpg"
import Team4 from "../../images/team/team4.jpg"
import Team5 from "../../images/team/team5.jpg"

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaGooglePlusG,
} from "react-icons/fa"
import ProgressBar from "../ProgressBar"

const TeamStyle1 = () => {
  return (
    <div className="team">
      <TabContainer id="team" defaultActiveKey="first">
      
        <Nav className="nav-justified">
          <Nav.Item>
            <Nav.Link eventKey="first"><img src={Team2} alt="Team Member" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second"><img src={Team3} alt="Team Member" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third"><img src={Team5} alt="Team Member" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth"><img src={Team4} alt="Team Member" /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fifth"><img src={Team1} alt="Team Member" /></Nav.Link>
          </Nav.Item>
        </Nav>
      
      
        <TabContent>
          <TabPane eventKey="first">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <img src={Team2} alt="Team Member" />
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="team-details">
                  <h4>Barry Allen</h4>
                  <span>Senior Web Developer</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <ul className="fa-ul">
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Interdum et
                      malesuada fames ac ante
                    </li>
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                      ante ipsum
                    </li>
                  </ul>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaDribbble />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGooglePlusG />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="skill-section">
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Web Design</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Joomla</span>
                      <ProgressBar width="95" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">WordPress</span>
                      <ProgressBar width="60" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Javascript</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane eventKey="second">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <img src={Team3} alt="Team Member" />
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="team-details">
                  <h4>Jane Doe</h4>
                  <span>Senior Web Developer</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <ul className="fa-ul">
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Interdum et
                      malesuada fames ac ante
                    </li>
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                      ante ipsum
                    </li>
                  </ul>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaDribbble />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGooglePlusG />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
              <div className="skill-section">
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Web Design</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Joomla</span>
                      <ProgressBar width="95" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">WordPress</span>
                      <ProgressBar width="60" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Javascript</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane eventKey="third">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <img src={Team5} alt="Team Member" />
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="team-details">
                  <h4>Cisco Ramon</h4>
                  <span>Senior Web Developer</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <ul className="fa-ul">
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Interdum et
                      malesuada fames ac ante
                    </li>
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                      ante ipsum
                    </li>
                  </ul>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaDribbble />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGooglePlusG />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
              <div className="skill-section">
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Web Design</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Joomla</span>
                      <ProgressBar width="95" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">WordPress</span>
                      <ProgressBar width="60" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Javascript</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane eventKey="fourth">
          <div className="row">
              <div className="col-md-4 col-sm-4">
                <img src={Team4} alt="Team Member" />
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="team-details">
                  <h4>John Doe</h4>
                  <span>Senior Web Developer</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <ul className="fa-ul">
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Interdum et
                      malesuada fames ac ante
                    </li>
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                      ante ipsum
                    </li>
                  </ul>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaDribbble />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGooglePlusG />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="skill-section">
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Web Design</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Joomla</span>
                      <ProgressBar width="95" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">WordPress</span>
                      <ProgressBar width="60" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Javascript</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane eventKey="fifth">
            <div className="row">
              <div className="col-md-4 col-sm-4">
                <img src={Team1} alt="Team Member" />
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="team-details">
                  <h4>John Doe</h4>
                  <span>Senior Web Developer</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>
                  <ul className="fa-ul">
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Interdum et
                      malesuada fames ac ante
                    </li>
                    <li>
                      <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                      ante ipsum
                    </li>
                  </ul>
                  <ul className="social">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaDribbble />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGooglePlusG />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="skill-section">
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Web Design</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Joomla</span>
                      <ProgressBar width="95" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">WordPress</span>
                      <ProgressBar width="60" />
                    </div>
                  </div>
                  <div className="skill-shortcode">
                    <div className="skill">
                      <span className="skill-name">Javascript</span>
                      <ProgressBar width="75" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPane>
        </TabContent >
      
    
      </TabContainer>
    </div>
    
  )
}

export default TeamStyle1
