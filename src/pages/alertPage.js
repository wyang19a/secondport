import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import Alert from 'react-bootstrap/Alert'
import FooterStyle1 from '../components/Footer/FooterStyle1'

const AlertPage = () => {

    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Alert" />
            
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <Alert variant="primary">
                                This is a alert with an example link. Give it a click if you like.
                            </Alert>
                        </div>
                        <div className="mb-3">
                            <Alert variant="success">
                                This is a alert with an example link. Give it a click if you like.
                            </Alert>
                        </div>
                        <div className="mb-3">
                            <Alert variant="secondary">
                                This is a alert with an example link. Give it a click if you like.
                            </Alert>
                        </div>
                        <div className="mb-3">
                            <Alert variant="danger">
                                This is a alert with an example link. Give it a click if you like.
                            </Alert>
                        </div>
                        <div className="mb-3">
                            <Alert variant="warning">
                                This is a alert with an example link. Give it a click if you like.
                            </Alert>
                        </div>
                        <div className="mb-3">
                            <Alert variant="info">
                                This is a alert with an example link. Give it a click if you like.
                            </Alert>
                        </div>
                        <div className="mb-3">
                            <Alert variant="light">
                                This is a alert with an example link. Give it a click if you like.
                            </Alert>
                        </div>
                        <div className="mb-3">
                            <Alert variant="dark">
                                This is a alert with an example link. Give it a click if you like.
                            </Alert>
                        </div>
                    </div>
                </div>
            </div>

            <FooterStyle1/>
        </>
    )
}

export default AlertPage
