import React from "react"

const About = ({textStyle}) => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className={`about-item text-center ${textStyle}`}>
      <p calssName="intro-p">
        Hi! My name is Wootae, I am a Fullstack Software Developer in Boston,
        Massachusetts.
        <br />
        I have my educational and professional background in health care service
        and research. I'm a person with well rounded perspective who is trained
        to be detail-oriented through experience. I have become more and more passionate about coding since I started learning
        software development and learned to enjoy small successes
        achieved in a process of problem solving. When I'm not working on a project,
        I like to spend time studying a language or framework I am focusing on,
        or go outside and enjoy the weather if weather is nice!
      </p>
      <img src="https://picsum.photos/200" alt="" className="img-circle" />
      <div className="name">Wootae Yang</div>
      <div className="designation">Software Developer</div>
    </div>
  )
}

export default About
