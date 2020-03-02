import React from "react"

const Banner = ({ bannerstyle, bgImg, children }) => {
  return (
    <section className="parallax banner-image" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={`banner ${bannerstyle}`}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
