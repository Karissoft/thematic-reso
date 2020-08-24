import React from "react"
import "./about-us.scss"
import Header from "../../components/header/header"
import Footer from "../../components/footer/Footer"
import FirstIcon from "../../assets/images/about-us/icons/first.svg"
import SecondIcon from "../../assets/images/about-us/icons/second.svg"
import ThirdIcon from "../../assets/images/about-us/icons/third.svg"
import FourthIcon from "../../assets/images/about-us/icons/fourth.svg"

function AboutUs({ sidebar, setSidebar }) {
  return (
    <div className={`about-us ${sidebar ? "open" : ""}`}>
      <Header sidebar={sidebar} setSidebar={setSidebar} page={"about-page"} />
      <main className="container">
        <h1>About Us</h1>
        <p>
          Thematic Resources Ltd is a Nigerian based oil and gas ("O&G") company
          with focus in acquiring assets for Exploration and Production. In the
          main time, we provide a wide range of upstream geophysical data
          services, down stream products and some interest in renewable energy.
          TR undertake to maximise the Local Content of any project it executes,
          while maintaining the local and international quality and safety
          standards..
        </p>
        <section className="who-we-are-wrapper">
          <h2>Who We Are</h2>
          <div className="wrapper">
            <div className="first">
              <img src={FirstIcon} alt="" />
              <div>
                <h5>Our Purpose</h5>
                <p>
                  Our purpose is to deliver energy, water and food to the world
                  in a sustainable matter
                </p>
              </div>
            </div>
            <div className="second">
              <img src={SecondIcon} alt="" />
              <div>
                <h5>Our Purpose</h5>
                <p>
                  We exist to innovate and create affordable technological
                  solutions that solve day to day human problems by increasing
                  the efficiency of systems and processes within the social,
                  commercial and public sector space.
                </p>
              </div>
            </div>
            <div className="third">
              <img src={ThirdIcon} alt="" />
              <div>
                <h5>Our Vision</h5>
                <p>
                  To become a leading independent Company combining best
                  practices, exceptional people and technical expertise.
                </p>
              </div>
            </div>
            <div className="fourth">
              <img src={FourthIcon} alt="" className="fourth-icon" />
              <div>
                <h5>Our Core Values</h5>
                <ul>
                  <li>Integrity</li>
                  <li>Quality</li>
                  <li>Safety</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
