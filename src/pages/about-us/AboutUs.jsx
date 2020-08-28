import React from "react"
import "./about-us.scss"
import Header from "../../components/header/header"
import Footer from "../../components/footer/Footer"
import FirstIcon from "../../assets/images/about-us/icons/first.svg"
import SecondIcon from "../../assets/images/about-us/icons/second.svg"
import ThirdIcon from "../../assets/images/about-us/icons/third.svg"
import FourthIcon from "../../assets/images/about-us/icons/fourth.svg"
import LocationMap from "../../components/map/LocationMap"

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
                <h5>Our mission</h5>
                <p>
                  To consistently extract maximum valaue from desirable opportunities
                  and create maximum
                  long term value for our shareholders.
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
        {/* second section */}

        <div className="section-wrapper">
          <div className="energy-wrapper">
            <div className="energy">
              <h4>ENERGY</h4>
              <p className="energy-paragraph">Fossil Energy (Oil and Gas)</p>                               
            </div>

            <div className="upstream">
              <h4>up stream</h4>
              <p className="upstream-paragraph">esploration and production</p>
            </div>

            <div className="services">
              <h4>Services</h4>
              <p className="services-paragraph">Geophysical data acquisition and Processing Integrated Reservoir
              Studies/Assets Evaluation Geomatic and Hydrography Surveys GIS and
              remote Sensing Geotechnical</p>
              <p className="services-paragraph">QA/QC Consultancy</p>
              <p className="services-paragraph">Manpower Training and & Supply</p>
            </div>

            <div className="down-stream">
              <h4> Down Stream</h4>
              <p className="down-stream-paragraph">Petroleum Production Sales and Services Pettrol(PMS),
               Diesel(AGO), Kerosine(DPK) Energy Oils an others Chemicals</p>
            </div>

            <div className="gas">
              <h4>Gas</h4>
              <p className="gas-paragraph">Liquefied Petroleum Gas (LPG)
              Liquefied Natural Gas (LNG)
              Compressed Natural Gas (CNG)
              </p>
            </div>

            <div className="renewable">
              <h4>Renewable Energy</h4>
              <p className="renewable-paragraph">Solar Energy
                 Wind turbines
                </p>
            </div>
          </div>

          <div className="farm-wrapper">
            <div className="livestock">
              <h4>farrm livestock</h4>
              <p className="livestock-paragraph">Poultry
              Cattles (Beef, Milk, Cheese, Yoghurt)
              Goats / Sheep
              Honey
                </p>
            </div>

            <div className="crops-cultivation">
              <h4>
                Crops Cultivation & Value Chain
               </h4>
              <p className="cultivation-paragraph">Crops Cultivation & Value Chain
              Oil Palm Plantation
              Cocoa and Bush Mango
              Bananas / Plantain /
              Oranges / mangos / Pineapple
              Rice/vegetables (green, pumpkin)
              Cassava (garri / starch / pelletsins)
              Maize / Millet / Beans / Onions
              Melons / peppers / tomatoes
              Groundnut
             </p>
            </div>
          </div>


          <div className="portable-wrapper">
            <div className="portable-water">
              <h4>PORTABLE WATER</h4>
              <p className="portable-paragraph">Bore hole Drilling
              Water Reticulation
              Mini Water Schemes
              Bottled Spring Water <br/>
              Mineral Water

             </p>

    

            </div>
          </div>
          <div className="torusim-wrapper">
            <div className="tourisim">
              <h4>TOURISM</h4>
              <p className="tourisim-paragraph">Hotels, Parks, Event Centres
              Event Management
              Tour Guards/Guides
              Gift Items
                 Travel Agency
                 </p>
            </div>

          </div>
         
        </div>
        <LocationMap />
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
