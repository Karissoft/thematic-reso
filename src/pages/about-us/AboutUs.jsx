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
        <h2 className="welcome">Welcome to</h2>

        <p className="thematic">Thematic Resources Limited</p>
        <h1>Overview</h1>
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
          <div>
          <h2>Who We Are</h2>
          <div className="wrapper">
            <div className="first">
              <img src={FirstIcon} alt="" />
              <div>
                <h5>Our Purpose</h5>
                <p>
                Our purpose is to produce and deliver energy, water and food to the world in a sustainable matter

                </p>
              </div>
            </div>
            <div className="second">
              <img src={SecondIcon} alt="" />
              </div>
                <h5>Our mission</h5>
                <p>
                  To consistently extract maximum valaue from desirable opportunities
                  and create maximum
                  long term value for our shareholders.
                </p>
              </div>
            <div className="third">
              <img src={ThirdIcon} alt="" />
              <div>
                <h5>Our Mission</h5>
                <p>
                To consistently extract maximum value from desirable opportunities  and create maximum  long  term value  for  our shareholders
                </p>
              </div>
            </div>
            <div className="third">
              <img src={ThirdIcon} alt="" />
              <div>
                <h5>Strategy</h5>
                <p>
                  Our main strategy is to extract fossil fuel, produce water
                  and food in a sustainable matter with little or no nagetive
                  impact on the environment.
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
