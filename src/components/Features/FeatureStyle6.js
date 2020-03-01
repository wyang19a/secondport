import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa"

const FeatureStyle6 = ({image, title, text}) => {
    return (
        <div className="feature-6">
            <img className="img-fluid" src={image} alt="theshahriyar"/>
            <h4>{title}</h4>
            <p>{text}</p>
            <a href="#">Read More <FaLongArrowAltRight/></a>
        </div>
    )
}

export default FeatureStyle6
