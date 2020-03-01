import React from 'react'
import BgImage from "../../images/bg/parallax5.jpg"

const CallToAction3 = () => {
    return (
        <section className="pad80 parallax" style={{backgroundImage: `url(${BgImage})`, backgroundPosition: "100% 50%"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="call-to-action text-center white">
                            <h3>Design. Develope. Dedicate</h3>
                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            <a href="#" className="btn btn-primary">Buy This Now</a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction3
