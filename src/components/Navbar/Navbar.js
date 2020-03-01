import React, { Component } from "react"

import { Link } from "gatsby"
import Navs from "./Navs"
import { FaBars } from "react-icons/fa"

export default class Navbar extends Component {
  state = {
    scrolled: false,
    isOpen: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let pageScroll = window.scrollY > 800

      if (pageScroll) {
        this.setState({
          scrolled: true,
        })
      } else {
        this.setState({
          scrolled: false,
        })
      }
    })
  }
  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (
      <header className={`${this.state.scrolled ? "navbar-fixed-top" : ""}`}>
        <nav
          className={`navbar navbar-expand-lg sticky-top ${
            this.props.navbarStyle ? this.props.navbarStyle : ""
          }`}
        >
          <div className="container">
            <Link className="navbar-brand" to="/">

            </Link>
            <button
              className={`${
                this.state.isOpen
                  ? "navbar-toggler"
                  : "navbar-toggler collapsed"
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleNav}
            >
              <FaBars />
            </button>

            <div
              className={`${
                this.state.isOpen
                  ? "collapse navbar-collapse show"
                  : "collapse navbar-collapse"
              }`}
              id="navbarSupportedContent"
            >
              <Navs navStyle="ml-auto" />
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
