import React from "react"
import Slider from "react-slick"
import TestiImage1 from "../images/testimonials/1.jpg"
import TestiImage2 from "../images/testimonials/3.jpg"

const Testimonial = ({textStyle}) => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings} className="testimonial-carousel">
      <div className={`testimonial-item text-center ${textStyle}`}>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at
          sem. Curabitur aliquet quam id dui posuere blandit. Cras
          ultricies ligula sed magna dictum porta. Curabitur arcu erat,
          accumsan id imperdiet et, porttitor at sem. Vivamus magna
          justo, lacinia eget consectetur sed, convallis at tellus.
        </p>
        <img src={TestiImage1} alt="" className="img-circle" />
        <div className="name">Wootae</div>
        <div className="designation">Software Developer</div>
      </div>
    </Slider>
  )
}

export default Testimonial
