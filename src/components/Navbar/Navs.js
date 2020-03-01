import React from "react"
import { Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"

const Navs = ({ navStyle }) => {
  return (
    <ul className={`navbar-nav ${navStyle}`}>
      <li className="nav-item">
        <a href="#portfolio" className="nav-link">Portfolio</a>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link">About</a>
      </li>
      <li className="nav-item">
        <a href="#skills" className="nav-link">Skills</a>
      </li>
      <li className="nav-item">
        <a href="#contact" className="nav-link">Contact</a>
      </li>
    </ul>
  )
}

export default Navs
