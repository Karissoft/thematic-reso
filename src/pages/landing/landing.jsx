import React from "react"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"

import "./landing.scss"
import { ReactComponent as FacebookIcon } from "../../assets/images/icons/facebook.svg"
import { ReactComponent as TwitterIcon } from "../../assets/images/icons/twitter.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/images/icons/linkedin.svg"
import { ReactComponent as InstagramIcon } from "../../assets/images/icons/instagram.svg"
import Header from "../../components/header/header"

const specializeArray = [
  // "farming",
  // "oil and gas",
  // "borehole drilling",
  // "up and down stream",
  // "gas",
  // "renewable energy",
  // "mini water schemes",
  // "mineral",
  // "consultancy",
  // "general supplies",
]

const LandingPage = ({ sidebar, setSidebar }) => {
  return (
    <div id="landing" className={`landing ${sidebar ? "open" : ""}`}>
      {/* SLiders */}
      <div className="sliders">
        {/* Header */}
        <Header sidebar={sidebar} setSidebar={setSidebar} page={"homepage"} />
        <div className="container">
          {/* Landing Page Content */}
          <h1 className="landing-title">
            thematic <span>Resources</span> LTD
          </h1>
          <div className="landing-text-wrapper">
            {/* <p className="landing-text">Our services include:</p> */}
            <TypistLoop interval={3000}>
              {specializeArray.map(text => (
                <Typist key={text} startDelay={1000}>
                  {text}
                </Typist>
              ))}
            </TypistLoop>
          </div>

          {/* Social Icons */}
          <div className="socials">
            <ul className="social-icons">
              <li>
                <a href="/facebook">
                  <FacebookIcon className="social-icon" />
                </a>
              </li>
              <li>
                <a href="/twitter">
                  <TwitterIcon className="social-icon" />
                </a>
              </li>
              <li>
                <a href="/instagram">
                  <LinkedinIcon className="social-icon" />
                </a>
              </li>
              <li>
                <a href="/instagram">
                  <InstagramIcon className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
