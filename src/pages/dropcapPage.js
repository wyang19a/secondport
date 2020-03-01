import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import FooterStyle1 from '../components/Footer/FooterStyle1'
import SectionTitle from '../components/SectionTitle/SectionTitle'

const DropcapPage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Dropcap" />

            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Dropcap" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <p><span className="dropcap" style={{color: "#ed1c24"}}>L</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.</p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="dropcap bg">L</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.</p>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "50px"}}>
                        <div className="col-md-6">
                            <p><span className="dropcap bg circle">L</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.</p>
                        </div>
                        <div className="col-md-6">
                            <p><span className="dropcap bg rounded">L</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.</p>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "50px"}}>
                        <div className="col-md-12">
                            <p><span className="dropcap">L</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque tristique dolor vitae tincidunt. Aenean quis massa uada mi elementum elementum. Nec sapien convallis vulputate rhoncus vel dui.</p>
                        </div>
                    </div>
                </div>
            </section>

            <FooterStyle1/>
        </>
    )
}

export default DropcapPage
