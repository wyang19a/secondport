import React, { useState } from "react"
import Portfolio1 from "../../images/portfolio/port1.jpg"
import Portfolio2 from "../../images/portfolio/port2.jpg"
import Portfolio3 from "../../images/portfolio/port3.jpg"
import Portfolio4 from "../../images/portfolio/port4.jpg"
import Portfolio5 from "../../images/portfolio/port5.jpg"
import Portfolio6 from "../../images/portfolio/port6.jpg"

const list = [
  {
    category: "cat1",
    id: "1",
    imgSource: Portfolio1,
    title: "Portfolio Title",
    tag: "Business || Finance",
  },
  {
    category: "cat1",
    id: "2",
    imgSource: Portfolio2,
    title: "Portfolio Title",
    tag: "Business || Finance",
  },
  {
    category: "cat2",
    id: "3",
    imgSource: Portfolio3,
    title: "Portfolio Title",
    tag: "Business || Finance",
  },
  {
    category: "cat1",
    id: "4",
    imgSource: Portfolio4,
    title: "Portfolio Title",
    tag: "Business || Finance",
  },
  {
    category: "cat2",
    id: "5",
    imgSource: Portfolio5,
    title: "Portfolio Title",
    tag: "Business || Finance",
  },
  {
    category: "cat3",
    id: "6",
    imgSource: Portfolio6,
    title: "Portfolio Title",
    tag: "Business || Finance",
  },
]

const Element = ({ imgSource, title, tag }) => (
  <div className="col-md-4 col-sm-6">
    <div className="portfolio-post-2 mb30">
      <img src={imgSource} alt="Portfolio Image" />
      <div className="portfolio-details">
        <h4>{title}</h4>
        <p>{tag}</p>
        <a href="#">
          <i className="icon-attachment"></i>
        </a>
      </div>
    </div>
  </div>
)

const PortfolioCol3Style1 = () => {
  const [display, setDisplay] = useState(list)

  const handleDisplay = category => {
    const categoryToDisplay = list.filter(item => item.category === category)
    setDisplay(categoryToDisplay)
  }

  return (
    <>
      <ul className="filter">
        <li>
          <button onClick={() => setDisplay(list)}>Show All</button>
        </li>
        <li>
          <button onClick={() => handleDisplay("cat1")}>HTML</button>
        </li>
        <li>
          <button onClick={() => handleDisplay("cat2")}>WordPress</button>
        </li>
        <li>
          <button onClick={() => handleDisplay("cat3")}>Joomla</button>
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

export default PortfolioCol3Style1
