import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./services.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";

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
};

function Services({ sidebar, setSidebar }) {
  return (
    <div className="services">
      <Header sidebar={sidebar} setSidebar={setSidebar} page={"services"} />
      <main className="container p-5">
        <h1 className="mb-5 text-center">Our Services</h1>
        <div className="slides-wrapper">
          <Slider {...slickSettings}>
            <div className=" slide">
              <Link to="/services/farming">
                <div className="farming ">
                  <h3>Farming</h3>
                </div>
              </Link>
            </div>
            <div className="slide">
              <Link to="/services/energy">
                <div className="energy ">
                  <h3>Energy</h3>
                </div>
              </Link>
            </div>
            <div className="slide">
              <Link to="/services/portable-water">
                <div className="water ">
                  <h3>Portable Water</h3>
                </div>
              </Link>
            </div>
            <div className="slide">
              <Link to="/services/tourism">
                <div className="tourism ">
                  <h3>Tourism</h3>
                </div>
              </Link>
            </div>
            <div className="slide">
              <Link to="/services/farming">
                <div className="farming ">
                  <h3>Farming</h3>
                </div>
              </Link>
            </div>
            <div className="slide">
              <Link to="/services/energy">
                <div className="energy ">
                  <h3>Energy</h3>
                </div>
              </Link>
            </div>
            <div className="sldie">
              <Link to="/services/portable-water">
                <div className="water ">
                  <h3>Portable Water</h3>
                </div>
              </Link>
            </div>
            <div className="slide">
              <Link to="/services/tourism">
                <div className="tourism ">
                  <h3>Tourism</h3>
                </div>
              </Link>
            </div>
          </Slider>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Services;
