import React from 'react'

const CallToAction2 = ({bgColor, btnSTyle, paddingClass}) => {
    return (
        <section className={`${paddingClass} call-to-action-2`} style={{backgroundColor: `${bgColor}`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="">
                            <h3 style={{color: "#fff", marginTop: "10px", fontSize: "24px"}}>LOOKING FOR Best Company FOR YOUR NEXT PROJECT?</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <a href="#" className="btn btn-primary white mr-2">Get a Quote</a>
                        <a href="#" className={`btn btn-primary ${btnSTyle}`}>Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction2
