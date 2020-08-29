import React from "react"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/header"
import "./contact.scss"

import LocationMap from '../../components/map/LocationMap'

const Contact = ({ sidebar, setSidebar }) => {
  return (
    <div className={`contact ${sidebar ? "open" : ""}`}>
      <Header sidebar={sidebar} setSidebar={setSidebar} page={"contact-page"} />
       <LocationMap contact={"contact-img"}/>
      <main className="container">
        <h1>Contact Us</h1>
        <p>
          Get in touch to start a conversation with us. We review every inquiry
          and respond promptly.
        </p>

        <form className="form">
          <div className="form-item">
            <input
              type="text"
              className="form-item-input"
              id="name"
              placeholder="Name"
            />
            <label htmlFor="name" className="form-item-label">
              Name:*
            </label>
            <small></small>
          </div>

          <div className="form-item">
            <input
              type="email"
              className="form-item-input"
              id="email"
              placeholder="Email"
            />
            <label htmlFor="email" className="form-item-label">
              Email Address:*
            </label>
            <small></small>
          </div>

          <div className="form-item">
            <input
              type="tel"
              className="form-item-input"
              id="phone"
              placeholder="Phone Number"
            />
            <label htmlFor="phone" className="form-item-label">
              Phone Number:*
            </label>
            <small></small>
          </div>

          <div className="form-item">
            <input
              type="text"
              className="form-item-input"
              id="company"
              placeholder="Company"
            />
            <label htmlFor="company" className="form-item-label">
              Company/Organization:*
            </label>
            <small></small>
          </div>

          <div className="form-item">
            <h3>Services of interest*</h3>
            <p className="italic">please select from the services below.</p>

            <div className="form-checkboxes">
              <div className="pretty p-default">
                <input type="checkbox" id="farm" />
                <div className="state">
                  <label htmlFor="farm">Farm</label>
                </div>
              </div>

              <div className="pretty p-default">
                <input type="checkbox" id="energy" />
                <div className="state">
                  <label htmlFor="energy">Energy</label>
                </div>
              </div>

              <div className="pretty p-default">
                <input type="checkbox" id="portable_water" />
                <div className="state">
                  <label htmlFor="portable_water">Portable Water</label>
                </div>
              </div>

              <div className="pretty p-default">
                <input type="checkbox" id="tourism" />
                <div className="state">
                  <label htmlFor="farm">Tourism</label>
                </div>
              </div>
            </div>
          </div>

          <div className="form-item">
            <textarea
              name="message"
              id="message"
              rows="10"
              className="form-textarea"
              placeholder="What do you hope to achieve?"
            ></textarea>
          </div>

          <div className="form-item">
            <label htmlFor="info" className="info-label">
              How did you hear about us?
            </label>
            <textarea
              name="info"
              id="info"
              rows="2"
              className="form-textarea info"
            ></textarea>
          </div>
          <button className="btn-submit">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
