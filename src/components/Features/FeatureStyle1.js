import React from 'react'

const FeatureStyle1 = ({title1, title2, number, text}) => {
    return (
        <div className="feature-1">
            <h4>{title1} <br/>& {title2} <span>{number}.</span></h4>
            <p>{text}</p>
        </div>
    )
}

export default FeatureStyle1
