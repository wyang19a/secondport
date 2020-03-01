import React from "react"

const FeatureStyle2 = ({ title, text, icon, featureStyle }) => {
  return (
    <div className={`feature-2 ${featureStyle}`}>
      <div className="media">
        <div className="media-left">
          <div className="feature-icon">
            <i className={icon}></i>
          </div>
        </div>
        <div className="media-body">
          <a href="#">
            <h3 className="media-heading">{title}</h3>
          </a>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureStyle2
