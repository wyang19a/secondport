import React from "react"

export default class MyForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: ""
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className="container">
          <div className="col-md-12">
              <form
                id="contactForm"
                className="contact-form"
                onSubmit={this.submitForm}
                action="https://formspree.io/mnqvgjad"
                method="POST"
              >

                  <div className="messages"></div>

                  <div className="controls">

                      <div className="row">
                          <div className="col-md-6">
                              <div className="form-group">
                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Email *" required="required" />
                              </div>
                              <div className="form-group">
                                  <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" />
                              </div>
                              <div className="form-group">
                                  <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone"/>
                              </div>
                              <div className="form-group">
                                  <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject" />
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="form-group">
                                  <textarea id="form_message" name="message" className="form-control" placeholder="Message *" required="required" style={{minHeight: "175px"}}></textarea>
                              </div>
                              <input type="submit" className="btn btn-primary" value="Send message" />
                          </div>
                      </div>

                      <div className="row">
                          <div className="col-md-12">
                              <p className="text-muted"><strong>*</strong> These fields are required.</p>
                          </div>
                      </div>
                  </div>
                  {status === "SUCCESS" ? <p>Thanks! I'll get back to you as soon as I can!</p> : ''}
                  {status === "ERROR" && <p>Ooops! There was an error. Please make sure all required fields are properly filled out.</p>}
              </form>
          </div>
      </div>
    )
  }


  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
