import React from "react"

import JqueryImg from "../images/client/jquery.png"
import JSImg from "../images/client/jsyellow.png"
import HtmlImg from "../images/client/html.png"
import CssImg from "../images/client/css.png"
import SassImg from "../images/client/sass.png"
import GitImg from "../images/client/git.png"
import RubyImg from "../images/client/ruby.png"
import RailsImg from "../images/client/ror.png"
import NodejsImg from "../images/client/nodejs.png"
import ReactImg from "../images/client/react.png"
import BootstrapImg from "../images/client/bootstrap.png"
import MongoImg from "../images/client/mongodb.png"
import HerokuImg from "../images/client/heroku.png"
import PostgreSQLImg from "../images/client/postgresql.png"

const Clients = () => {
  return (
    <ul className="logo-group">
      <li className="skill-logo">
        <img src={JSImg} alt="JavaScript" />
      </li>
      <li className="skill-logo">
        <img src={HtmlImg} alt="HTML" title="HTML" />
      </li>
      <li className="skill-logo">
        <img src={CssImg} alt="CSS" title="CSS" />
      </li>
      <li className="skill-logo">
        <img src={SassImg} alt="Sass" title="Sass" />
      </li>
      <li className="skill-logo">
        <img src={ReactImg} alt="React/RN" title="React, React Native" />
      </li>
      <li className="skill-logo">
        <img src={JqueryImg} alt="Jquery" title="jQuery" />
      </li>
      <li className="skill-logo">
        <img src={RubyImg} alt="Ruby" title="Ruby" />
      </li>
      <li className="skill-logo">
        <img src={RailsImg} alt="RoR" title="Ruby on Rails" />
      </li>
      <li className="skill-logo">
        <img src={GitImg} alt="Git" title="GitHub" />
      </li>
      <li className="skill-logo">
        <img src={BootstrapImg} alt="Bootstrap" title="Bootstrap" />
      </li>
      <li className="skill-logo">
        <img src={MongoImg} alt="MongoDB" title="MongoDB" />
      </li>
      <li className="skill-logo">
        <img src={NodejsImg} alt="Nodejs" title="Node js" />
      </li>
      <li className="skill-logo">
        <img src={HerokuImg} alt="Heroku" title="Heroku" />
      </li>
      <li className="skill-logo">
        <img src={PostgreSQLImg} alt="PostgreSQL" title="PostgreSQL" />
      </li>
    </ul>
  )
}

export default Clients
