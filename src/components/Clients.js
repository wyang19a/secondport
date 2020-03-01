import React from "react"

import ReactImg from "../images/client/react.png"
import JqueryImg from "../images/client/jquery.png"
import RubyImg from "../images/client/ruby.png"
import RailsImg from "../images/client/rails.png"
import BootstrapImg from "../images/client/bootstrap.png"
import HtmlImg from "../images/client/html.png"

const Clients = () => {
  return (
    <ul className="logo-group">
      <li className="client-logo">
        <a href="#">
          <img src={ReactImg} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={JqueryImg} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={RubyImg} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={RailsImg} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={BootstrapImg} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={HtmlImg} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src="#" alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src="#" alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src="#" alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src="#" alt="Client's Logo" />
        </a>
      </li>
    </ul>
  )
}

export default Clients
