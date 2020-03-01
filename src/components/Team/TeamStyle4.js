import React from 'react'

const TeamStyle4 = ({teamImg, name, designation, details}) => {
    return (
        <div className="team-4">
            <img className="img-fluid" src={teamImg} alt="theshahriyar"/>
            <h4>{name}</h4>
            <span>{designation}</span>
            <p>{details}</p>
        </div>
    )
}

export default TeamStyle4
