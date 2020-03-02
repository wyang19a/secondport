import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ErrorBg from "../images/patterns/14.png"
import {Link} from "gatsby"

const errorPage = () => {
    return (
        <>
            <Header />

            <section className="pad-t80 pad-b100" style={{backgroundImage: `url(${ErrorBg})`, backgroundRepeat: "repeat"}}>
                <div className="error-page">
                    <h1>404</h1>
                    <h3>Page Not Found</h3>
                    <p>Please try one of the following Pages</p>
                    <Link to="/" className="btn btn-primary">Home Page</Link>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default errorPage
