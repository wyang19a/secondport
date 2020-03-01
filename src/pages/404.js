import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import FooterStyle2 from '../components/Footer/FooterStyle2'
import ErrorBg from "../images/patterns/14.png"
import {Link} from "gatsby"

const errorPage = () => {
    return (
        <>
            <HeaderStyle1 />

            <section className="pad-t80 pad-b100" style={{backgroundImage: `url(${ErrorBg})`, backgroundRepeat: "repeat"}}>
                <div className="error-page">
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                    <p>Please try one of the following Pages</p>
                    <Link to="/" className="btn btn-primary">Home Page</Link>
                </div>
            </section>

            <FooterStyle2/>
        </>
    )
}

export default errorPage
