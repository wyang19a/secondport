import React from 'react'
import Slider from "react-slick"
import SectionTitle from '../SectionTitle/SectionTitle'
import Blog1 from "../../images/others/img-6.jpg"
import Blog2 from "../../images/others/img-7.jpg"
import Blog3 from "../../images/others/img-2.jpg"
import Blog4 from "../../images/others/img-5.jpg"

const LatestNewsCarousel = () => {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    return (
        <section
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Latest News" />
            </div>
          </div>
            <Slider {...settings} className="row">
              <div className="col-md-12">
                <div className="latest-news">
                  <div className="latest-news-img">
                    <img src={Blog1} alt="blog-post" />
                    <div>
                      <span>Aug</span>
                      <span>06</span>
                    </div>
                  </div>
                  <h4>
                    <a href="#">
                      Lorem Ipsum is dummy text of type setting industry.
                    </a>
                  </h4>
                  <p>
                    Vivamus magna justo, lacinia eget consectetur convallis at
                    tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="latest-news">
                  <div className="latest-news-img">
                    <img src={Blog2} alt="blog-post" />
                    <div>
                      <span>Aug</span>
                      <span>07</span>
                    </div>
                  </div>
                  <h4>
                    <a href="#">
                      Lorem Ipsum is dummy text of type setting industry.
                    </a>
                  </h4>
                  <p>
                    Vivamus magna justo, lacinia eget consectetur convallis at
                    tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="latest-news">
                  <div className="latest-news-img">
                    <img src={Blog3} alt="blog-post" />
                    <div>
                      <span>Aug</span>
                      <span>08</span>
                    </div>
                  </div>
                  <h4>
                    <a href="#">
                      Lorem Ipsum is dummy text of type setting industry.
                    </a>
                  </h4>
                  <p>
                    Vivamus magna justo, lacinia eget consectetur convallis at
                    tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                  </p>
                </div>
              </div>
              <div className="col-md-12">
                <div className="latest-news">
                  <div className="latest-news-img">
                    <img src={Blog4} alt="blog-post" />
                    <div>
                      <span>Aug</span>
                      <span>08</span>
                    </div>
                  </div>
                  <h4>
                    <a href="#">
                      Lorem Ipsum is dummy text of type setting industry.
                    </a>
                  </h4>
                  <p>
                    Vivamus magna justo, lacinia eget consectetur convallis at
                    tellus. Lorem ipsum dolor sit consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </Slider>
            
            
        </div>
      </section>
    )
}

export default LatestNewsCarousel
