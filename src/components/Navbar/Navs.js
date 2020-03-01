import React from "react"
import { Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"

const Navs = ({ navStyle }) => {
  return (
    <ul className={`navbar-nav ${navStyle}`}>
      <li className="nav-item">
        <Link
          to="/homepage1"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/"
          className="nav-link"
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/aboutUs1"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
        >
          Skills
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio3ColSt1"
          className="nav-link"
          activeClassName="active"
          partiallyActive={true}
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Navs
