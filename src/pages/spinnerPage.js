import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import FooterStyle1 from '../components/Footer/FooterStyle1'

const SpinnerPage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Spinner" />

            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mb-5">
                                <h4 className="mb-3">Border Spinner</h4>
                                <Spinner animation="border" />
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-3">Grow Spinner</h4>
                                <Spinner animation="grow" />
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-3">Variant Border Spinner</h4>
                                <Spinner animation="border" variant="primary" />
                                <Spinner animation="border" variant="secondary" />
                                <Spinner animation="border" variant="success" />
                                <Spinner animation="border" variant="info" />
                                <Spinner animation="border" variant="warning" />
                                <Spinner animation="border" variant="danger" />
                                <Spinner animation="border" variant="dark" />
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-3">Variant Grow Spinner</h4>
                                <Spinner animation="grow" variant="primary" />
                                <Spinner animation="grow" variant="secondary" />
                                <Spinner animation="grow" variant="success" />
                                <Spinner animation="grow" variant="info" />
                                <Spinner animation="grow" variant="warning" />
                                <Spinner animation="grow" variant="danger" />
                                <Spinner animation="grow" variant="dark" />
                            </div>
                            <div className="mb-5">
                                <h4 className="mb-3">Button Spinner</h4>
                                <Button variant="primary" disabled>
                                    <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />
                                    Loading...
                                </Button>
                                <Button variant="primary" disabled className="ml-3">
                                    <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />
                                    Loading...
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterStyle1/>
        </>
    )
}

export default SpinnerPage
