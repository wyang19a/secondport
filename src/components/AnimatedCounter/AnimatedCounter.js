import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({title}) => {
    return (
        <div className="animated-counter text-center white">
            <div className="animated-number"><CountUp end={4567} /></div>
            <h4>{title}</h4>
        </div>
    )
}

export default AnimatedCounter
