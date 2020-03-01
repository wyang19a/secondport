import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import TeamStyle1 from '../components/Team/TeamStyle1'
import TeamStyle2 from '../components/Team/TeamStyle2'
import TeamStyle3 from '../components/Team/TeamStyle3'
import TeamStyle4 from '../components/Team/TeamStyle4'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import TeamImage1 from "../images/team/team1.jpg"
import TeamImage2 from "../images/team/team2.jpg"
import TeamImage3 from "../images/team/team3.jpg"
import TeamImage5 from "../images/team/team5.jpg"

const TeamMember = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Pages" pageTitle="Team Member" />

            {/* Start Team Section*/}
            <section className="pad80">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="Team Member" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <TeamStyle1/>
                    </div>
                </div>
                </div>
            </section>
            {/* End Team Section*/}
            {/* Start Team Section*/}
            <section className="pad80">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <SectionTitle title="Team Member" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <TeamStyle2 teamImage={TeamImage1} name="Mr. John Doe" designation="Web Developer" fbLink="#" twLink="#" googleLink="#" otherLink="#" />
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <TeamStyle2 teamImage={TeamImage2} name="Mr. John Doe" designation="Web Developer" fbLink="#" twLink="#" googleLink="#" otherLink="#" />
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <TeamStyle2 teamImage={TeamImage3} name="Mr. John Doe" designation="Web Developer" fbLink="#" twLink="#" googleLink="#" otherLink="#" />
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <TeamStyle2 teamImage={TeamImage5} name="Mr. John Doe" designation="Web Developer" fbLink="#" twLink="#" googleLink="#" otherLink="#" />
                    </div>
                </div>
                </div>
            </section>
            {/* End Team Section*/}
            {/* Start Team Section*/}
            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <SectionTitle title="Team Member" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <TeamStyle3
                                memberImg={TeamImage2}
                                title="John Doe"
                                designation="CEO"
                                fbLink="#"
                                twitterLink="#"
                                linkedInLink="#"
                            />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <TeamStyle3
                                memberImg={TeamImage3}
                                title="John Doe"
                                designation="CEO"
                                fbLink="#"
                                twitterLink="#"
                                linkedInLink="#"
                            />
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <TeamStyle3
                                memberImg={TeamImage5}
                                title="John Doe"
                                designation="CEO"
                                fbLink="#"
                                twitterLink="#"
                                linkedInLink="#"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Team Section*/}
            {/* Start Team Section*/}
            <section className="pad80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <SectionTitle title="Team Member" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <TeamStyle4
                                teamImg={TeamImage1}
                                name="John Doe"
                                designation="CEO & Founder"
                                details="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
                            />
                        </div>
                        <div className="col-md-4">
                            <TeamStyle4
                                teamImg={TeamImage3}
                                name="Alex Doe"
                                designation="Consultant"
                                details="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue malesuada. Vestibulum ac diam sit amet quam."
                            />
                        </div>
                        <div className="col-md-4">
                            <TeamStyle4
                                teamImg={TeamImage2}
                                name="John Smith"
                                designation="Manager"
                                details="Donec sollicitudin molestie malesua. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Team Section*/}
        </>
    )
}

export default TeamMember
