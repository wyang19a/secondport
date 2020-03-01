import React from 'react'
import {Link} from "gatsby"

const BreadcrumbSection = ({breadcrumbBg, parentPath, pageTitle}) => {
    return (
        <section className="breadcrumb-section" style={{backgroundImage: `url(${breadcrumbBg})`, backgroundSize: "cover"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-5">
                        <div className="page-title">
                            <h1>{pageTitle}</h1>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7">
                        <div className="breadcrumb">
                            <ul>
                                <li>You Are Here :</li>
                                <li><Link to="/">Home</Link></li>
                                <li>{parentPath}</li>
                                <li>{pageTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadcrumbSection
