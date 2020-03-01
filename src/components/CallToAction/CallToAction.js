import React from 'react'
import Bg4 from "../../images/bg/bg4.jpg"

const CallToAction = () => {
    return (
        <section className="pad120 parallax" style={{backgroundImage: `url(${Bg4})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="call-to-action text-center white">
                            <h3>We ARe Here to Solve your Problem</h3>
                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            <a href="#" className="btn btn-primary">Buy This Now</a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
