import React from 'react'

const FeaturesStyle5 = ({title, text, icon, bgImg}) => {
    return (
        <div className="feature-5">
            <i className={`${icon}`}></i>
            <h4>{title}</h4>
            <p>{text}</p>
            <img className="img-fluid" src={bgImg} alt=""/>
        </div>
    )
}

export default FeaturesStyle5
