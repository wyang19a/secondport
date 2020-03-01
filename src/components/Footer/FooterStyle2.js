import React from 'react'
import {FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn, FaGooglePlusG} from "react-icons/fa"

const FooterStyle2 = () => {
    return (
        <section className="pad80 footer-minimal" style={{backgroundColor: "#f3f3f3"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className="social">
                            <li><a href="https://www.linkedin.com/in/wootae-yang/"><FaLinkedinIn/></a></li>
                            <li><a href="https://github.com/wyang19a"><FaGithub/></a></li>
                        </ul>
                        <div className="copyright-text">
                            <p>Copyright © All Rights Reserved. Developed by <a href="#">Wootae Yang</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterStyle2
