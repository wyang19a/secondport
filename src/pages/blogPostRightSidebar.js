import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import BreadcrumbSection from '../components/BreadcrumbSection'
import BreadcrumbBg from "../images/bg/breadcrumb4.jpg"
import {FaLink, FaUserAlt, FaFolder, FaRegComment, FaPinterest, FaDribbble, FaBehance, FaInstagram, FaGit} from "react-icons/fa"
import BlogImage3 from "../images/blog/blog-large-3.jpg"
import CommentImg1 from "../images/testimonials/1.jpg"
import CommentImg2 from "../images/testimonials/2.jpg"
import CommentImg3 from "../images/testimonials/3.jpg"
import FooterStyle1 from '../components/Footer/FooterStyle1'

const BlogPostRightSidebar = () => {
    return (
        <>
            <HeaderStyle1 />
            <BreadcrumbSection breadcrumbBg={BreadcrumbBg} parentPath="Blog" pageTitle="Blog Post" />

            <section className="pad80">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-8">
                            <div className="single-blog-post">
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
                                            <p>They never said winning was easy. Some people can’t handle success, I can. I’m up to something. Cloth talk. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. You smart, you loyal, you a genius. Learning is cool, but knowing is better, and I know the key to success. They don’t want us to eat. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. Learning is cool, but knowing is better, and I know the key to success.</p>
                                            <p>They key is to have every key, the key to open every door. They will try to close the door on you, just open it. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile. Give thanks to the most high. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile.</p>
                                            <p>Surround yourself with angels. You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. Major key, don’t fall for the trap, stay focused. It’s the ones closest to you that want to see you fail. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing.</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="post-meta">
                                                <ul>
                                                <li><a href="#"><span><FaUserAlt /></span>Super User</a></li>
                                                    <li><a href="#"><span><FaFolder/></span>Blog</a></li>
                                                    <li><a href="#"><span><FaRegComment/></span>2773 Comments</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-section">
                                    <h2>4 Comments</h2>

                                    <ul className="comment-tree">
                                        <li>
                                            <div className="comment-box">
                                                <img src={CommentImg1} alt="theshahriyar.com" />
                                                <div className="comment-content">
                                                    <h4>John Doe <a href="#">Reply</a></h4>
                                                    <span>July 6, 2013. 8:30 pm.</span>
                                                    <p>Class aptent taciti sociosqu litora torquent per conubia per himenaeos. Nulla tristique in semper vel. Vestibulum sodales ante a purus volutpat euismod. Proin sodales quam nec ante sollicitudin lacinia. </p>
                                                </div>
                                            </div>
                                            <ul className="depth">
                                                <li>
                                                    <div className="comment-box">
                                                        <img src={CommentImg2} alt="theshahriyar.com" />
                                                        <div className="comment-content">
                                                            <h4>John Doe <a href="#">Reply</a></h4>
                                                            <span>July 6, 2013. 8:30 pm.</span>
                                                            <p>Class aptent taciti sociosqu litora torquent per conubia per himenaeos. Nulla tristique in semper vel. </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>

                                        <li>
                                            <div className="comment-box">
                                                <img src={CommentImg2} alt="theshahriyar.com" />
                                                <div className="comment-content">
                                                    <h4>John Doe <a href="#">Reply</a></h4>
                                                    <span>July 6, 2013. 8:30 pm.</span>
                                                    <p>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="comment-box">
                                                <img src={CommentImg3} alt="theshahriyar.com" />
                                                <div className="comment-content">
                                                    <h4>John Doe <a href="#">Reply</a></h4>
                                                    <span>July 6, 2013. 8:30 pm.</span>
                                                    <p>Class aptent taciti sociosqu litora torquent per conubia per himenaeos. Nulla tristique in semper vel. Vestibulum sodales ante a purus volutpat euismod. Proin sodales quam nec ante sollicitudin lacinia. </p>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                    <form id="comment-form" className="comment-form">
                                        <h2>Leave a Reply</h2>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Your Name *" id="name" />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="Your Email *" id="email" />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>   
                                            <div className="col-md-4">    
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Website" id="website" />
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Your Message *" id="message" style={{minHeight: "175px"}}></textarea>
                                                    <p className="help-block text-danger"></p>
                                                </div>
                                                <div className="clearfix"></div>
                                                <div id="success"></div>
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </form> 
                                </div>
                            </div>
                            
                        </div>
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
                    </div>
                    
                </div>
            </section>

            <FooterStyle1/>
        </>
    )
}

export default BlogPostRightSidebar


