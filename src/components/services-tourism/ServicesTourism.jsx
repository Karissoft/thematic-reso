import React from "react"
import ServicesSub from "../services-sub/services-sub"
import "./services-tourism.scss"

function ServicesTourism() {
  return (
    <ServicesSub title="Tourism" subpage="tourism">
      <div className="title">
        <h1 className="services-sub-title">
          <span>Tourism</span>
        </h1>
        <p className="services-sub-text">Explore with Us!</p>
      </div>
      <div className="tourism">
        <h2 className="sub-heading">Our offer</h2>
        <p>Hotels, Parks, Event Centres</p>
        <p>Event Management</p>
        <p>Tour Guards/Guides</p>
        <p>Gift Items </p>
         <p>Travel Agency</p>
      </div>
    </ServicesSub>
  )
}

export default ServicesTourism
