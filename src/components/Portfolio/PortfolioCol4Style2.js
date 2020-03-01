import React, { useState } from "react"
import Portfolio1 from "../../images/portfolio/port1.jpg"
import Portfolio2 from "../../images/portfolio/port2.jpg"
import Portfolio3 from "../../images/portfolio/port3.jpg"
import Portfolio4 from "../../images/portfolio/port4.jpg"
import Portfolio5 from "../../images/portfolio/port5.jpg"
import Portfolio6 from "../../images/portfolio/port6.jpg"

const list = [
  {
    category: "react",
    category2: "ror",
    id: "1",
    imgSource: Portfolio1,
    title: "Get It Done !",
    tag: "React || Ruby on Rails",
  },
  {
    category: "js",
    id: "2",
    imgSource: Portfolio2,
    title: "Poll-ar Bear",
    tag: "JavaScript || HTML/CSS || MongoDB/Express",
  },
  {
    category: "ror",
    category2: "js",
    id: "3",
    imgSource: Portfolio3,
    title: "Compounding Tracker",
    tag: "JavaScript || Ruby on Rails",
  },
  {
    category: "js",
    id: "4",
    imgSource: Portfolio4,
    title: "Tic-Tac-Toe",
    tag: "JavaScript || HTML/CSS",
  },
  {
    category: "react",
    id: "5",
    imgSource: Portfolio5,
    title: "YSJ Surgical Clinic",
    tag: "Gatsby",
  },
]

const Element = ({ imgSource, title, tag }) => (
  <div className="col-md-4 col-sm-6">
    <div className="portfolio-post mb30">
      <img src={imgSource} alt="" />
      <div className="hover-box">
        <div className="inner-hover">
          <h4>{title}</h4>
          <p>{tag}</p>
          <a href="#">
            <i className="icon-attachment"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
)

const PortfolioCol4Style2 = () => {
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
        <li>
          <button onClick={() => handleDisplay("mdb")}>MongoDB</button>
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

export default PortfolioCol4Style2
