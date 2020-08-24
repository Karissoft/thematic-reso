import React from "react"
import Slider from "react-slick"
import { Link } from "react-router-dom"
import "./services.scss"
import Header from "../../components/header/header"
import Footer from "../../components/footer/Footer"

const slickSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 854,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 698,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

function Services({ sidebar, setSidebar }) {
  return (
    <div className="services">
      <Header sidebar={sidebar} setSidebar={setSidebar} page={"services"} />
      <main className="container">
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          lacinia efficitur ex, a pretium sem blandit dapibus. Aliquam aliquet
          eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="slides-wrapper">
          <Slider {...slickSettings}>
            <div className="farming slide">
              <Link to="/services/farming">
                <h3>Farming</h3>
              </Link>
            </div>
            <div className="energy slide">
              <Link to="/services/energy">
                <h3>Energy</h3>
              </Link>
            </div>
            <div className="water slide">
              <Link to="/services/portable-water">
                <h3>Portable Water</h3>
              </Link>
            </div>
            <div className="tourism slide">
              <Link to="/services/tourism">
                <h3>Tourism</h3>
              </Link>
            </div>
            <div className="farming slide">
              <Link to="/services/farming">
                <h3>Farming</h3>
              </Link>
            </div>
            <div className="energy slide">
              <Link to="/services/energy">
                <h3>Energy</h3>
              </Link>
            </div>
            <div className="water slide">
              <Link to="/services/portable-water">
                <h3>Portable Water</h3>
              </Link>
            </div>
            <div className="tourism slide">
              <Link to="/services/tourism">
                <h3>Tourism</h3>
              </Link>
            </div>
          </Slider>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Services
