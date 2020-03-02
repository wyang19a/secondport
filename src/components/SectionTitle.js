import React from "react"

const SectionTitle = ({ titleStyle, title }) => {
  return (
    <div className={`section-title ${titleStyle ? titleStyle : ""}`}>
      <h3>{title}</h3>
    </div>
  )
}

export default SectionTitle
