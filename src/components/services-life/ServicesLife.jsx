import React from "react"
import ServicesSub from "../services-sub/services-sub"
import "./services-life.scss"

function ServicesLife() {
  return (
    <ServicesSub subpage="life">
      <div className="title">
        <h1 className="services-sub-title">
          Water <span>is life</span>
        </h1>
      </div>
      <div className="life">
        <h2 className="sub-heading">portable water</h2>
        <p>Poultry</p>
        <p>Cattles (Beef, Milk, Cheese, Yoghurt)</p>
        <p>Goats/Sheep Honey</p>
      </div>
    </ServicesSub>
  )
}

export default ServicesLife
