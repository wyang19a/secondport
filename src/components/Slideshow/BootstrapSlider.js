import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import SlideImg1 from "../../images/slideshow/slider_4.jpg"
import SlideImg2 from "../../images/slideshow/slider_5.jpg"
import SlideImg3 from "../../images/slideshow/slider_2.jpg"

const BootstrapSlider = () => {
    return (
        
        <Carousel id="main-slide">
            <Carousel.Item>
                <img src={SlideImg1} alt="slider"/>
                <div className="slider-content">
                    <div className="col-md-12 text-center">
                        <h1 className="animated1">
                        <span>Welcome to <strong>Revson</strong></span>
                        </h1>
                        <p className="animated2">Generate a flood of new business with the<br/> power of a digital media platform</p>
                        <a href="#" className="btn btn-primary animated3">Read More</a>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img src={SlideImg2} alt="slider"/>
                <div className="slider-content">
                    <div className="col-md-12 text-center">
                        <h1 className="animated1">
                        <span>Welcome to <strong>Revson</strong></span>
                        </h1>
                        <p className="animated2">Generate a flood of new business with the<br/> power of a digital media platform</p>
                        <a href="#" className="btn btn-primary animated3">Read More</a>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img src={SlideImg3} alt="slider"/>
                <div className="slider-content">
                    <div className="col-md-12 text-center">
                        <h1 className="animated1">
                        <span>Welcome to <strong>Revson</strong></span>
                        </h1>
                        <p className="animated2">Generate a flood of new business with the<br/> power of a digital media platform</p>
                        <a href="#" className="btn btn-primary animated3">Read More</a>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
        
    )
}

export default BootstrapSlider
