import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import Gallery1 from "../images/portfolio/port1.jpg"
import Gallery2 from "../images/portfolio/port2.jpg"
import Gallery3 from "../images/portfolio/port3.jpg"
import Gallery4 from "../images/portfolio/port4.jpg"
import Gallery5 from "../images/portfolio/port5.jpg"
import Gallery6 from "../images/portfolio/port6.jpg"


const images = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
];

export default class Gallery extends Component {

    state = {
        photoIndex : 0,
        isOpen : false,
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <div className="gallery">
                <ul>
                    <li>
                        <a onClick={() => this.setState({ isOpen: true })}>
                            <img src={Gallery1} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => this.setState({ isOpen: true })}>
                            <img src={Gallery2} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => this.setState({ isOpen: true })}>
                            <img src={Gallery3} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => this.setState({ isOpen: true })}>
                            <img src={Gallery4} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => this.setState({ isOpen: true })}>
                            <img src={Gallery5} alt=""/>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => this.setState({ isOpen: true })}>
                            <img src={Gallery6} alt=""/>
                        </a>
                    </li>
                </ul>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })
                        }
                        onMoveNextRequest={() =>
                        this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })
                        }
                    />
                )}
            </div>
        )
    }
}
