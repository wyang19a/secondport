import React from "react"

import JqueryImg from "../images/skills/jquery.png"
import JSImg from "../images/skills/jsyellow.png"
import HtmlImg from "../images/skills/html.png"
import CssImg from "../images/skills/css.png"
import SassImg from "../images/skills/sass.png"
import GitImg from "../images/skills/git.png"
import RubyImg from "../images/skills/ruby.png"
import RailsImg from "../images/skills/ror.png"
import NodejsImg from "../images/skills/nodejs.png"
import ReactImg from "../images/skills/react.png"
import BootstrapImg from "../images/skills/bootstrap.png"
import MongoImg from "../images/skills/mongodb.png"
import HerokuImg from "../images/skills/heroku.png"
import PostgreSQLImg from "../images/skills/postgresql.png"

const Skills = () => {
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

export default Skills
