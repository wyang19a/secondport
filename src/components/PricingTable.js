import React from "react"

import PricingBg1 from "../images/others/pricing-bg-1.jpg"
import PricingBg2 from "../images/others/pricing-bg-2.jpg"
import PricingBg3 from "../images/others/pricing-bg-3.jpg"

import { FaQuestionCircle } from "react-icons/fa"

const PricingTable = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="pricing-box wow fadeInUp" data-wow-duration="1s">
          <div
            className="pricing-head white"
            style={{
              backgroundImage: `url(${PricingBg1})`,
              backgroundPosition: "50% 50%",
            }}
          >
            <span className="previous-price">$10.00</span>
            <h4>Free</h4>
            <h5>Basic</h5>
          </div>
          <div className="pricing-body">
            <ul>
              <li>Basic Feature</li>
              <li>One User</li>
              <li>10 Records</li>
              <li>Basic Feature</li>
              <li>One User</li>
              <li>More Records</li>
            </ul>
          </div>
          <div className="pricing-footer">
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div
          className="pricing-box wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".5s"
        >
          <div
            className="pricing-head white"
            style={{
              backgroundImage: `url(${PricingBg2})`,
              backgroundPosition: "50% 50%",
            }}
          >
            <span className="previous-price">$66.00</span>
            <h4>$33.00</h4>
            <h5>Professional</h5>
          </div>
          <div className="pricing-body">
            <ul>
              <li>Basic Feature</li>
              <li>One User</li>
              <li>10 Records</li>
              <li>Basic Feature</li>
              <li>One User</li>
              <li>More Records</li>
            </ul>
          </div>
          <div className="pricing-footer">
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div
          className="pricing-box wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="1s"
        >
          <div
            className="pricing-head white"
            style={{
              backgroundImage: `url(${PricingBg3})`,
              backgroundPosition: "50% 50%",
            }}
          >
            <span className="previous-price">$99.00</span>
            <h4>$66.00</h4>
            <h5>Business</h5>
          </div>
          <div className="pricing-body">
            <ul>
              <li>Basic Feature</li>
              <li>One User</li>
              <li>10 Records</li>
              <li>Basic Feature</li>
              <li>One User</li>
              <li>More Records</li>
            </ul>
          </div>
          <div className="pricing-footer">
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingTable
