import React from 'react'

const TeamStyle3 = ({title, designation, memberImg, fbLink, twitterLink, linkedInLink}) => {
    return (
        <div className="team-member-3">
            <div className="team-member-img">
                <img className="img-fluid" src={memberImg} alt="theshahriyar"/>
            </div>
            <div className="team-info">
                <span className="team-name">{title}</span>
                <span className="team-designation">{designation}</span>
            </div>
            <div className="social-icon">
                <ul className="icon">
                    <li>
                        <a href={fbLink}><i className="icon-facebook"></i></a>
                    </li>
                    <li>
                        <a href={twitterLink}><i className="icon-twitter"></i></a>
                    </li>
                    <li>
                        <a href={linkedInLink}><i className="icon-linkedin"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TeamStyle3
