import React from "react"

const FeatureStyle3 = ({ bgColor, featureStyle, icon, title, text }) => {
  return (
    <div
      className={`feature-3 ${featureStyle}`}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <i className={icon}></i>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

export default FeatureStyle3
