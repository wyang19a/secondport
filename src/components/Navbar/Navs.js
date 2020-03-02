import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navs = ({ navStyle }) => {
  return (
    <ul className={`navbar-nav ${navStyle}`}>
      <li className="nav-item">
        <AnchorLink  offset='50' href="#portfolio" className="nav-link">Portfolio</AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink  offset='50' href="#about" className="nav-link">About</AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink  offset='50' href="#skills" className="nav-link">Skills</AnchorLink>
      </li>
      <li className="nav-item">
        <AnchorLink  offset='50' href="#contact" className="nav-link">Contact</AnchorLink>
      </li>
    </ul>
  )
}

export default Navs
