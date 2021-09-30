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
              <div className="farming ">
                <Link to="/services/farming">
                  <h3>Farming</h3>
                </Link>
              </div>
            </div>
            <div className="slide">
              <div className="energy ">
                <Link to="/services/energy">
                  <h3>Energy</h3>
                </Link>
              </div>
            </div>
            <div className="slide">
              <div className="water ">
                <Link to="/services/portable-water">
                  <h3>Portable Water</h3>
                </Link>
              </div>
            </div>
            <div className="slide">
              <div className="tourism ">
                <Link to="/services/tourism">
                  <h3>Tourism</h3>
                </Link>
              </div>
            </div>
            <div className="slide">
              <div className="farming ">
                <Link to="/services/farming">
                  <h3>Farming</h3>
                </Link>
              </div>
            </div>
            <div className="slide">
              <div className="energy ">
                <Link to="/services/energy">
                  <h3>Energy</h3>
                </Link>
              </div>
            </div>
            <div className="sldie">
              <div className="water ">
                <Link to="/services/portable-water">
                  <h3>Portable Water</h3>
                </Link>
              </div>
            </div>
            <div className="slide">
              <div className="tourism ">
                <Link to="/services/tourism">
                  <h3>Tourism</h3>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Services;
