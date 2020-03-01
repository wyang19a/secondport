import React from "react"

const FeatureStyle8 = ({ title, icon, text, featureStyle }) => {
  return (
    <div className={`feature-8 ${featureStyle}`}>
      <i className={icon}></i>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  )
}

export default FeatureStyle8
