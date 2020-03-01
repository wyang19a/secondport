import React from 'react'
import {FaFacebookF,FaLinkedinIn,FaPinterest,FaDribbble,FaTwitter,FaRss,FaPhoneVolume,FaMapMarkerAlt} from "react-icons/fa"

const TopHeader = ({topHeaderStyle}) => {
    return (
        <section className={`top-header ${topHeaderStyle ? topHeaderStyle : ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="social-top">
                            <ul className="top-social">
                                <li><a href="#" target="_blank"><FaFacebookF /></a></li>
                                <li><a href="#" target="_blank"><FaTwitter/></a></li>
                                <li><a href="#" target="_blank"><FaPinterest/></a></li>
                                <li><a href="#" target="_blank"><FaDribbble/></a></li>
                                <li><a href="#" target="_blank"><FaLinkedinIn/></a></li>
                                <li><a href="#" target="_blank"><FaRss/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="float-right">
                            <div className="top-phone mr10"><FaPhoneVolume/>  +466 123 333 589</div>
                            <div className="top-address"><FaMapMarkerAlt/> 128 W 44th St, New York, New York 10075</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopHeader
