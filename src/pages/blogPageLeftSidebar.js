import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import {FaLink, FaUserAlt, FaFolder, FaRegComment, FaLongArrowAltRight, FaPinterest, FaDribbble, FaBehance, FaInstagram, FaGit} from "react-icons/fa"
import BlogImage1 from "../images/blog/blog-large-1.jpg"
import BlogImage2 from "../images/blog/blog-large-2.jpg"
import BlogImage3 from "../images/blog/blog-large-3.jpg"
import BlogImage4 from "../images/blog/blog-large-4.jpg"
import BlogImage5 from "../images/blog/blog-large-5.jpg"
import FooterStyle1 from '../components/Footer/FooterStyle1'

const BlogPageLeftSidebar = () => {
    return (
        <>
           <HeaderStyle1 />
           <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Blog" pageTitle="Blog Page" />


           <section className="pad80">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4">
                            <div className="widget widget-archive">
                                <div className="widget-title">
                                    <h3>Blog Archive</h3>
                                </div>
                                <ul>
                                    <li><a href="#">MAY 2016 (4)</a></li>
                                    <li><a href="#">MARCH 2016 (4)</a></li>
                                </ul>
                            </div>
                            <div className="widget widget-category">
                                <div className="widget-title">
                                    <h3>Blog Categories</h3>
                                </div>
                                <ul>
                                    <li><a href="#">Blog (4)</a></li>
                                    <li><a href="#">Template (4)</a></li>
                                </ul>
                            </div>
                            <div className="widget widget-tag">
                                <div className="widget-title">
                                    <h3>Tag Cloud</h3>
                                </div>
                                <ul className="tags-list">
                                    <li><a href="#">Business</a></li>
                                    <li><a href="#">Joomla</a></li>
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">Template</a></li>
                                    <li><a href="#">Wordpress</a></li>
                                </ul>
                            </div>
                            <div className="widget widget-text">
                                <div className="widget-title">
                                    <h3>Text Widget</h3>
                                </div>
                                <p>Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                                <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                            </div>
                            <div className="widget widget-text">
                                <div className="widget-title">
                                    <h3>Contact Right</h3>
                                </div>
                                <p>You can contact or visit us during working time.</p>
                                <p>Tel: 1234 - 5678 - 9012</p>
                                <p>Email: support@example.com</p>
                                <p>Working Hours: 8:00 a.m - 17:00 a.m</p>
                            </div>
                            <div className="widget widget-social">
                                <ul>
                                    <li><a href="#"><span><FaPinterest/></span></a></li>
                                    <li><a href="#"><span><FaDribbble/></span></a></li>
                                    <li><a href="#"><span><FaBehance/></span></a></li>
                                    <li><a href="#"><span><FaInstagram/></span></a></li>
                                    <li><a href="#"><span><FaGit/></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            {/* Start Blog Post */}
                            <div className="blog-post">
                                <div className="blog-img">
                                    <img src={BlogImage1} className="img-fluid" alt="theshahriyar.com"/>
                                    <div className="img-overlay">
                                        <a href="#"><span><FaLink /></span></a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="left-part">
                                        <div className="blog-date">
                                            <span className="blog_date">
                                                <span className="date">02</span><br/><span className="month">May</span>
                                            </span>
                                            <div className="clr"></div>
                                            <span className="blog_icon">
                                                <i className="icon-pencil" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <div className="post-title">
                                            <h3><a href="#">Here's A Bunch Of Numbers</a></h3>
                                        </div>
                                        <div className="post-text">
                                            <p>Concept of the number one, citizens of distant epochs. Intelligent beings Euclid not a sunrise but a galaxyrise, the sky calls to us intelligent beings Flatland, billions upon billions. With pretty stories for which there's little good evidence stirred by starlight, rogue circumnavigated! Tesseract Hypatia. Cambrian explosion, from which we spring. Cosmos another world hearts of the stars, radio telescope.</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-meta">
                                                <ul>
                                                    <li><a href="#"><span><FaUserAlt /></span>Super User</a></li>
                                                    <li><a href="#"><span><FaFolder/></span>Blog</a></li>
                                                    <li><a href="#"><span><FaRegComment/></span>2773 Comments</a></li>
                                                </ul>
                                            </div>
                                            <div className="read-more">
                                                <a href="#" className="btn-read-more">Read More <span><FaLongArrowAltRight/></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Post */}

                            {/* Start Blog Post */}
                            <div className="blog-post">
                                <div className="blog-img">
                                    <img src={BlogImage2} className="img-fluid" alt="theshahriyar.com"/>
                                    <div className="img-overlay">
                                        <a href="#"><span><FaLink /></span></a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="left-part">
                                        <div className="blog-date">
                                            <span className="blog_date">
                                                <span className="date">02</span><br/><span className="month">May</span>
                                            </span>
                                            <div className="clr"></div>
                                            <span className="blog_icon">
                                                <i className="icon-pencil" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <div className="post-title">
                                            <h3><a href="#">Here's A Bunch Of Numbers</a></h3>
                                        </div>
                                        <div className="post-text">
                                            <p>Concept of the number one, citizens of distant epochs. Intelligent beings Euclid not a sunrise but a galaxyrise, the sky calls to us intelligent beings Flatland, billions upon billions. With pretty stories for which there's little good evidence stirred by starlight, rogue circumnavigated! Tesseract Hypatia. Cambrian explosion, from which we spring. Cosmos another world hearts of the stars, radio telescope.</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-meta">
                                                <ul>
                                                    <li><a href="#"><span><FaUserAlt /></span>Super User</a></li>
                                                    <li><a href="#"><span><FaFolder/></span>Blog</a></li>
                                                    <li><a href="#"><span><FaRegComment/></span>2773 Comments</a></li>
                                                </ul>
                                            </div>
                                            <div className="read-more">
                                                <a href="#" className="btn-read-more">Read More <span><FaLongArrowAltRight/></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Post */}

                            {/* Start Blog Post */}
                            <div className="blog-post">
                                <div className="blog-img">
                                    <img src={BlogImage3} className="img-fluid" alt="theshahriyar.com"/>
                                    <div className="img-overlay">
                                        <a href="#"><span><FaLink /></span></a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="left-part">
                                        <div className="blog-date">
                                            <span className="blog_date">
                                                <span className="date">02</span><br/><span className="month">May</span>
                                            </span>
                                            <div className="clr"></div>
                                            <span className="blog_icon">
                                                <i className="icon-pencil" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <div className="post-title">
                                            <h3><a href="#">Here's A Bunch Of Numbers</a></h3>
                                        </div>
                                        <div className="post-text">
                                            <p>Concept of the number one, citizens of distant epochs. Intelligent beings Euclid not a sunrise but a galaxyrise, the sky calls to us intelligent beings Flatland, billions upon billions. With pretty stories for which there's little good evidence stirred by starlight, rogue circumnavigated! Tesseract Hypatia. Cambrian explosion, from which we spring. Cosmos another world hearts of the stars, radio telescope.</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-meta">
                                                <ul>
                                                    <li><a href="#"><span><FaUserAlt /></span>Super User</a></li>
                                                    <li><a href="#"><span><FaFolder/></span>Blog</a></li>
                                                    <li><a href="#"><span><FaRegComment/></span>2773 Comments</a></li>
                                                </ul>
                                            </div>
                                            <div className="read-more">
                                                <a href="#" className="btn-read-more">Read More <span><FaLongArrowAltRight/></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Post */}


                            {/* Start Blog Post */}
                            <div className="blog-post">
                                <div className="blog-img">
                                    <img src={BlogImage4} className="img-fluid" alt="theshahriyar.com"/>
                                    <div className="img-overlay">
                                        <a href="#"><span><FaLink /></span></a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="left-part">
                                        <div className="blog-date">
                                            <span className="blog_date">
                                                <span className="date">02</span><br/><span className="month">May</span>
                                            </span>
                                            <div className="clr"></div>
                                            <span className="blog_icon">
                                                <i className="icon-pencil" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <div className="post-title">
                                            <h3><a href="#">Here's A Bunch Of Numbers</a></h3>
                                        </div>
                                        <div className="post-text">
                                            <p>Concept of the number one, citizens of distant epochs. Intelligent beings Euclid not a sunrise but a galaxyrise, the sky calls to us intelligent beings Flatland, billions upon billions. With pretty stories for which there's little good evidence stirred by starlight, rogue circumnavigated! Tesseract Hypatia. Cambrian explosion, from which we spring. Cosmos another world hearts of the stars, radio telescope.</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-meta">
                                                <ul>
                                                    <li><a href="#"><span><FaUserAlt /></span>Super User</a></li>
                                                    <li><a href="#"><span><FaFolder/></span>Blog</a></li>
                                                    <li><a href="#"><span><FaRegComment/></span>2773 Comments</a></li>
                                                </ul>
                                            </div>
                                            <div className="read-more">
                                                <a href="#" className="btn-read-more">Read More <span><FaLongArrowAltRight/></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Post */}

                            {/* Start Blog Post */}
                            <div className="blog-post">
                                <div className="blog-img">
                                    <img src={BlogImage5} className="img-fluid" alt="theshahriyar.com"/>
                                    <div className="img-overlay">
                                        <a href="#"><span><FaLink /></span></a>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <div className="left-part">
                                        <div className="blog-date">
                                            <span className="blog_date">
                                                <span className="date">02</span><br/><span className="month">May</span>
                                            </span>
                                            <div className="clr"></div>
                                            <span className="blog_icon">
                                                <i className="icon-pencil" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <div className="post-title">
                                            <h3><a href="#">Here's A Bunch Of Numbers</a></h3>
                                        </div>
                                        <div className="post-text">
                                            <p>Concept of the number one, citizens of distant epochs. Intelligent beings Euclid not a sunrise but a galaxyrise, the sky calls to us intelligent beings Flatland, billions upon billions. With pretty stories for which there's little good evidence stirred by starlight, rogue circumnavigated! Tesseract Hypatia. Cambrian explosion, from which we spring. Cosmos another world hearts of the stars, radio telescope.</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-meta">
                                                <ul>
                                                    <li><a href="#"><span><FaUserAlt /></span>Super User</a></li>
                                                    <li><a href="#"><span><FaFolder/></span>Blog</a></li>
                                                    <li><a href="#"><span><FaRegComment/></span>2773 Comments</a></li>
                                                </ul>
                                            </div>
                                            <div className="read-more">
                                                <a href="#" className="btn-read-more">Read More <span><FaLongArrowAltRight/></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Blog Post */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="pagination">
                                <li className="disabled"><a href="#">Start</a></li>
                                <li className="disabled"><a href="#">Prev</a></li>
                                <li className="active"><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">Next</a></li>
                                <li><a href="#">End</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <FooterStyle1/>


        </>
    )
}

export default BlogPageLeftSidebar

