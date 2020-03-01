import React from "react"

import Client1 from "../images/client/1.png"
import Client2 from "../images/client/2.png"
import Client3 from "../images/client/3.png"
import Client4 from "../images/client/4.png"
import Client5 from "../images/client/5.png"
import Client6 from "../images/client/6.png"

const Clients = () => {
  return (
    <ul className="logo-group">
      <li className="client-logo">
        <a href="#">
          <img src={Client1} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={Client2} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={Client3} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={Client4} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={Client5} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={Client6} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={Client5} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={Client6} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={Client5} alt="Client's Logo" />
        </a>
      </li>
      <li className="client-logo">
        <a href="#">
          <img src={Client6} alt="Client's Logo" />
        </a>
      </li>
    </ul>
  )
}

export default Clients
