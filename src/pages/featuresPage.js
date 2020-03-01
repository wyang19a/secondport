import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import FooterStyle1 from '../components/Footer/FooterStyle1'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import FeatureImg1 from "../images/others/img-8.jpg"
import FeatureImg2 from "../images/others/img-4.jpg"
import FeatureImg3 from "../images/others/img-9.jpg"
import Img1 from "../images/others/img-1.jpg"
import Img2 from "../images/others/img-2.jpg"
import Img9 from "../images/others/img-9.jpg"
import Img5 from "../images/others/img-9.jpg"
import Img4 from "../images/others/img-9.jpg"
import {
    FaDropbox,
    FaGlobeAsia,
    FaPlaneDeparture,
    FaTruckMoving,
    FaRegHandLizard,
    FaUserSecret,
  } from "react-icons/fa"
import FeatureStyle1 from '../components/Features/FeatureStyle1'
import FeatureStyle2 from '../components/Features/FeatureStyle2'
import FeatureStyle3 from '../components/Features/FeatureStyle3'
import FeatureStyle4 from '../components/Features/FeatureStyle4'
import FeaturesStyle5 from '../components/Features/FeaturesStyle5'
import FeatureStyle6 from '../components/Features/FeatureStyle6'
import FeatureStyle7 from '../components/Features/FeatureStyle7'
import FeatureStyle8 from '../components/Features/FeatureStyle8'
import FeatureStyle9 from '../components/Features/FeatureStyle9'

const FeaturesPage = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Element" pageTitle="Features" />

            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Feature Style 1" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <FeatureStyle1
                                title1="Story"
                                title2="History"
                                number="01"
                                text="Vivamus magna justo, lacinia eget consect sed, convallis at tellus. Lorem ipsum dolor consectetur adipiscing elit."
                            />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle1
                                title1="Goal"
                                title2="Mission"
                                number="02"
                                text="Vivamus magna justo, lacinia eget consect sed, convallis at tellus. Lorem ipsum dolor consectetur adipiscing elit."
                            />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle1
                                title1="Target"
                                title2="Success"
                                number="03"
                                text="Vivamus magna justo, lacinia eget consect sed, convallis at tellus. Lorem ipsum dolor consectetur adipiscing elit."
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Feature Style 2" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FeatureStyle2
                            icon="icon-puzzle"
                            title="DESIGNED TO BE AMAZING"
                            text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                            />
                        </div>
                        <div className="col-md-6">
                            <FeatureStyle2
                            icon="icon-mobile"
                            title="Industrial Services"
                            text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                            />
                        </div>
                        <div className="col-md-6">
                            <FeatureStyle2
                            icon="icon-layers"
                            title="Startup Business Planning"
                            text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                            />
                        </div>
                        <div className="col-md-6">
                            <FeatureStyle2
                            icon="icon-trophy"
                            title="Make company top"
                            text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu."
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Feature Style 3" />
                        </div>
                    </div>
                    <div className="row">
                        <div
                        className="col-md-4"
                        style={{ paddingLeft: "0", paddingRight: "0" }}
                        >
                            <FeaturesStyle5
                                title="Our Mission"
                                icon="icon-layers"
                                bgImg={FeatureImg1}
                                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
                            />
                        </div>
                        <div
                        className="col-md-4"
                        style={{ paddingLeft: "0", paddingRight: "0" }}
                        >
                            <FeaturesStyle5
                                title="Our Vision"
                                icon="icon-lightbulb"
                                bgImg={FeatureImg2}
                                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
                            />
                        </div>
                        <div
                        className="col-md-4"
                        style={{ paddingLeft: "0", paddingRight: "0" }}
                        >
                            <FeaturesStyle5
                                title="Our Success"
                                icon="icon-trophy"
                                bgImg={FeatureImg3}
                                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Feature Style 4" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="template-image mbl-margin-bottom">
                            <img className="img-fluid" src={Img1} alt="Shahriyar Ahmed" />
                        </div>
                        </div>
                        <div className="col-md-6">
                            <div className="working-process-box">
                                <FeatureStyle4
                                icon="icon-layers"
                                title="Discuss About Project"
                                text="Nulla facilisi curabitur iaculis accumsan augue, ex ea commodo consequat nec finibus mauris pretium eu."
                                />
                                <FeatureStyle4
                                icon="icon-linegraph"
                                title="Analyze Design & COncept"
                                text="Nulla facilisi curabitur iaculis accumsan augue, ex ea commodo consequat nec finibus mauris pretium eu."
                                />
                                <FeatureStyle4
                                icon="icon-circle-compass"
                                title="Write code for project"
                                text="Nulla facilisi curabitur iaculis accumsan augue, ex ea commodo consequat nec finibus mauris pretium eu."
                                />
                                <FeatureStyle4
                                icon="icon-beaker"
                                title="Test project with few method"
                                text="Nulla facilisi curabitur iaculis accumsan augue, ex ea commodo consequat nec finibus mauris pretium eu."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Feature Style 5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <FeatureStyle6
                                image={Img9}
                                title="Praesent sapien massa"
                                text="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada."
                            />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle6
                                image={Img5}
                                title="Convallis pellentes nec"
                                text="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
                            />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle6
                                image={Img4}
                                title="Donec sollicitudin molestie"
                                text="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada."
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Feature Style 6" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <FeatureStyle9
                                featureStyle="text-center"
                                icon="icon-layers"
                                title="labore et dolore"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                            />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle9
                                featureStyle="text-center"
                                icon="icon-aperture"
                                title="labore et dolore"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                            />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle9
                                featureStyle="text-center"
                                icon="icon-genius"
                                title="labore et dolore"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                            />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle9
                                featureStyle="text-center"
                                icon="icon-beaker"
                                title="labore et dolore"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                            />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle9
                                featureStyle="text-center"
                                icon="icon-bargraph"
                                title="labore et dolore"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                            />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle9
                                featureStyle="text-center"
                                icon="icon-puzzle"
                                title="labore et dolore"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Feature Style 7" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FeatureStyle3
                                bgColor="#f2f2f2"
                                featureStyle="text-center"
                                icon="icon-layers"
                                title="labore et dolore"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
                            />
                        </div>
                        <div className="col-md-6">
                            <FeatureStyle3
                                bgColor="#f2f2f2"
                                featureStyle="text-center"
                                icon="icon-trophy"
                                title="ipsum dolor sit"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
                            />
                        </div>
                        <div className="col-md-6">
                            <FeatureStyle3
                                bgColor="#f2f2f2"
                                featureStyle="text-center"
                                icon="icon-genius"
                                title="amet quam vehicula"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
                            />
                        </div>
                        <div className="col-md-6">
                            <FeatureStyle3
                                bgColor="#f2f2f2"
                                featureStyle="text-center"
                                icon="icon-puzzle"
                                title="ligula sed magna"
                                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Feature Style 8" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <FeatureStyle8
                                featureStyle="text-center"
                                icon="icon-presentation"
                                title="HTML Template"
                                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
                            />
                        </div>
                        <div className="col-md-3">
                            <FeatureStyle8
                                featureStyle="text-center active"
                                icon="icon-camera"
                                title="Joomla Template"
                                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
                            />
                        </div>
                        <div className="col-md-3">
                            <FeatureStyle8
                                featureStyle="text-center"
                                icon="icon-target"
                                title="WordPress Theme"
                                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
                            />
                        </div>
                        <div className="col-md-3">
                            <FeatureStyle8
                                featureStyle="text-center"
                                icon="icon-trophy"
                                title="WP Plugin"
                                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
                            />
                        </div>
                        <div className="col-md-3">
                            <FeatureStyle8
                                featureStyle="text-center"
                                icon="icon-basket"
                                title="cum soluta nobis"
                                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
                            />
                        </div>
                        <div className="col-md-3">
                            <FeatureStyle8
                                featureStyle="text-center"
                                icon="icon-layers"
                                title="cum soluta nobis"
                                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
                            />
                        </div>
                        <div className="col-md-3">
                            <FeatureStyle8
                                featureStyle="text-center"
                                icon="icon-linegraph"
                                title="cum soluta nobis"
                                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
                            />
                        </div>
                        <div className="col-md-3">
                            <FeatureStyle8
                                featureStyle="text-center"
                                icon="icon-genius"
                                title="minus id"
                                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pad80" style={{ backgroundColor: "#f3f3f3" }}>
                <div className="container">
                <div className="row">
                    <div className="col-md-7">
                    <SectionTitle
                        titleStyle="left"
                        title="Feature Style 9"
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="row mbl-margin-bottom">
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaDropbox />}
                            title="Packaging"
                            subtitle="We package &amp; store"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaGlobeAsia />}
                            title="Worldwide"
                            subtitle="Everywhere"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaPlaneDeparture />}
                            title="Plane"
                            subtitle="Faster With Plane"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaTruckMoving />}
                            title="Transporting"
                            subtitle="We Fast Transport"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaRegHandLizard />}
                            title="Hand to Hand"
                            subtitle="Secure Transport"
                        />
                        </div>
                        <div className="col-md-6">
                        <FeatureStyle7
                            icon={<FaUserSecret />}
                            title="Secure"
                            subtitle="We Gurantee"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="col-md-5">
                    <img src={Img2} alt="" className="w-100" />
                    <h4
                        style={{
                        marginTop: "30px",
                        marginBottom: "15px",
                        fontSize: "18px",
                        }}
                    >
                        Who We Are
                    </h4>
                    <p>
                        Proin eget tortor risus. Donec sollicitudin molestie malesuada.
                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                        posuere cubilia Curae.
                    </p>
                    </div>
                </div>
                </div>
            </section>

            <FooterStyle1/>
        </>
    )
}

export default FeaturesPage
