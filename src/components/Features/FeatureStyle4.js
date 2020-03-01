import React from 'react'

const FeatureStyle4 = ({title, text, icon}) => {
    return (
        <div className="feature-4">
            <div className="media">
                <div className="media-left">
                    <div className="feature-icon text-center">
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

export default FeatureStyle4
