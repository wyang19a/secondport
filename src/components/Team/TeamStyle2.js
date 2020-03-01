import React from 'react'

const TeamStyle2 = ({teamImage, name, designation, fbLink, twLink, googleLink, otherLink}) => {
    return (
        <div className="team-member-2">
            <img src={teamImage} alt="team member"/>
            <div className="team-member-details">
                <h4>{name}</h4>
                <h5>{designation}</h5>
                <ul className="team-social">
                    <li><a href={fbLink}><i className="icon-facebook"></i></a></li>
                    <li><a href={twLink}><i className="icon-twitter"></i></a></li>
                    <li><a href={googleLink}><i className="icon-googleplus"></i></a></li>
                    <li><a href={otherLink}><i className="icon-tumblr"></i></a></li>
                </ul>
            </div>
        </div>
    )
}

export default TeamStyle2
