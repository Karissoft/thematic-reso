import React from "react";
import "./about-us.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import FirstIcon from "../../assets/images/about-us/icons/first.svg";
import SecondIcon from "../../assets/images/about-us/icons/second.svg";
import ThirdIcon from "../../assets/images/about-us/icons/third.svg";
import FourthIcon from "../../assets/images/about-us/icons/fourth.svg";

function AboutUs({ sidebar, setSidebar }) {
  return (
    <div className={`about-us ${sidebar ? "open" : ""}`}>
      <Header sidebar={sidebar} setSidebar={setSidebar} page={"about-page"} />
      <main className="container">
        <h1 className="mb-3">Overview</h1>
        <p>
          Thematic Resources Ltd is a Nigerian based oil and gas ("O&G") company
          with focus in acquiring assets for Exploration and Production. In the
          main time, we provide a wide range of upstream geophysical data
          services, mid & down stream products and some interest in renewable
          energy.
        </p>
        <p>
          TR undertake to maximise the Local Content of any project it executes,
          while maintaining the local and international quality and safety
          standards..
        </p>

        <section className="who-we-are-wrapper mt-5">
          <h2 className="line-header">Who We Are</h2>
          <div className="wrapper row mb-5">
            <div className="first col-sm-6">
              <div>
                <img src={FirstIcon} alt="" /> <br />
                <h5>Our Purpose</h5>
                <p>
                  Our purpose is to produce and deliver energy, water and food
                  to the world in a sustainable matter
                </p>
              </div>
            </div>
            <div className="first col-sm-6">
              <div>
                <img src={SecondIcon} alt="" /> <br />
                <h5>Our vision</h5>
                <p>
                  To become a leading independent Company combining best
                  practices, exceptional people and technical expertise
                </p>
              </div>
            </div>
            <div className="first col-sm-6">
              <div>
                <img src={ThirdIcon} alt="" /> <br />
                <h5>Our mission</h5>
                <p>
                  To consistently extract maximum value from desirable
                  opportunities and create maximum long term value for our
                  shareholders
                </p>
              </div>
            </div>
            <div className="first col-sm-6">
              <div>
                <img src={ThirdIcon} alt="" />
                <br />
                <h5>Strategy</h5>
                <p>
                  Our main strategy is to extract fossil fuel, produce water and
                  food in a sustainable matter with little or no negative impact
                  on the environment.
                </p>
              </div>
            </div>
          </div>
          <div className="core_values p-3 p-sm-5  rounded">
            <h4 className="text-center mb-4 ">Our Core Values</h4>
            <div className="content d-flex justify-content-around w-100 ">
              <span>
                {" "}
                <img src={FourthIcon} alt="" className="fourth-icon" />
              </span>
              <span>Integrity</span>
              <span>Quality</span>
              <span>Safety</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
