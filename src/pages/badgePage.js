import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import Badge from 'react-bootstrap/Badge'
import FooterStyle1 from '../components/Footer/FooterStyle1'

const badgePage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Badge" />
            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                                <div className="mb-3">
                                    <h1>
                                        Example heading <Badge variant="primary">New</Badge>
                                    </h1>
                                </div>
                                <div className="mb-3">
                                <   h2>
                                        Example heading <Badge variant="secondary">New</Badge>
                                    </h2>
                                </div>
                                <div className="mb-3">
                                    <h3>
                                        Example heading <Badge variant="success">New</Badge>
                                    </h3>
                                </div>
                                <div className="mb-3">
                                    <h4>
                                        Example heading <Badge variant="warning">New</Badge>
                                    </h4>
                                </div>
                                <div className="mb-3">
                                    <h5>
                                        Example heading <Badge variant="danger">New</Badge>
                                    </h5>
                                </div>
                                <div className="mb-3">
                                    <h6>
                                        Example heading <Badge variant="info">New</Badge>
                                    </h6>
                                </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterStyle1/>
        </>
    )
}

export default badgePage
