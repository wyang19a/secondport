import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import SectionTitle from '../components/SectionTitle/SectionTitle'
import FooterStyle1 from '../components/Footer/FooterStyle1'

const BlockquotePage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Block Quote" />

            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Block Quote" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, 
                            porttitor at sem. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam 
                            vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. 
                            Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                            <div className="row">
                                <div className="col-md-6">
                                    <blockquote className="primary"><p>Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt.</p></blockquote>
                                </div>
                                <div className="col-md-6">
                                    <blockquote className="ash-bg"><p>Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt.</p></blockquote>
                                </div>
                            </div>
                            <p>Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum 
                                sed sit amet dui. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, 
                                convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. 
                                Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, 
                                egestas non nisi. Sed porttitor lectus nibh.</p>
                        </div>
                    </div>
                </div>
            </section>

            
            <FooterStyle1/>
        </>
    )
}

export default BlockquotePage
