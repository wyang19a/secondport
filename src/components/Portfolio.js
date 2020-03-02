import React, { useState } from "react"
import Portfolio0 from "../images/portfolio/port0.jpg"
import Portfolio1 from "../images/portfolio/port1.jpg"
import Portfolio2 from "../images/portfolio/port2.jpg"
import Portfolio3 from "../images/portfolio/port3.jpg"

const list = [
  {
    category: "react",
    id: "1",
    imgSource: "https://picsum.photos/1024?random=5",
    title: "YSJ Surgical Clinic",
    tag: "Coming Soon || Gatsby, React",
    desc: "Freelance job - business website",
    url: "#"
  },
  {
    category: "react",
    category2: "ror",
    id: "2",
    imgSource: Portfolio3,
    title: "Get It Done !",
    tag: "React || Ruby on Rails",
    desc: "Personal side project 3",
    url: "https://github.com/wyang19a/planner-client"
  },
  {
    category: "js",
    id: "3",
    imgSource: Portfolio2,
    title: "Poll-ar Bear",
    tag: "JavaScript || MongoDB/Express/Node.js",
    desc: "Team side project",
    url: "https://github.com/SEI-06/Survey-Client",
  },
  {
    category: "ror",
    category2: "js",
    id: "4",
    imgSource: Portfolio1,
    title: "Compounding Tracker",
    tag: "JavaScript || Ruby on Rails",
    desc: "Personal side project 2",
    url: "https://github.com/wyang19a/pharmacy-client",
  },
  {
    category: "js",
    id: "5",
    imgSource: Portfolio0,
    title: "Tic-Tac-Toe",
    tag: "JavaScript || HTML/CSS",
    desc: "Personal side project 1",
    url: "https://github.com/wyang19a/tic-tac-toe-client",
  },
]

const Element = ({ imgSource, title, tag, desc, url }) => (
  <div className="col-md-4 col-sm-6">
    <div className="portfolio-post-2 mb30">
      <img src={imgSource} alt=""/>
        <div className="portfolio-details">
          <h4>{title}</h4>
          <div className="tagDesc">
          <p>{tag}</p><p>{desc}</p>
          </div>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <i className="icon-attachment"></i>
          </a>
        </div>
    </div>
  </div>
)

const Portfolio = () => {
  const [display, setDisplay] = useState(list)

  const handleDisplay = category => {
    const categoryToDisplay = list.filter(item => item.category === category || item.category2 === category)
    setDisplay(categoryToDisplay)
  }

  return (
    <>
      <ul className="filter">
        <li>
          <button onClick={() => setDisplay(list)}>Show All</button>
        </li>
        <li>
          <button onClick={() => handleDisplay("react")}>React</button>
        </li>
        <li>
          <button onClick={() => handleDisplay("js")}>JavaScript</button>
        </li>
        <li>
          <button onClick={() => handleDisplay("ror")}>Ruby on Rails</button>
        </li>
      </ul>
      <div className="row portfolio-box">
        {display.map(element => (
          <Element key={element.id} {...element} />
        ))}
      </div>
    </>
  )
}

export default Portfolio
