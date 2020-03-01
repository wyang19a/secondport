import React, { Component } from "react"
import Navs from "./Navs"
import { FaBars } from "react-icons/fa"

export default class NavbarStyle2 extends Component {
  state = {
    scrolled: false,
    isOpen: false,
  }

  toggleNav = () => {
    this.setState({
      isOpen: false,
    })
  }

  render() {
    const { navbarStyle } = this.props
    return (
      <header>
        <nav className={`navbar navbar-expand-lg bottom-nav ${navbarStyle}`}>
          <div className="container">
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
              <Navs />
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
