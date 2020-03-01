import React from "react"
import Slider from "react-slick"

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
          I am a Software Developer and an outdoors enthusiast who is trained
          to be detail-oriented and self-directed through educational and
          professional background. I have passion for problem solving, and enjoy
          learning about new technology. 
        </p>
        <img src="https://picsum.photos/200" alt="" className="img-circle" />
        <div className="name">Wootae Yang</div>
        <div className="designation">Software Developer</div>
      </div>
    </Slider>
  )
}

export default Testimonial
