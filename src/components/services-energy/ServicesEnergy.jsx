import React from "react"
import ServicesSub from "./../services-sub/services-sub"
import "./services-energy.scss"

function ServicesEnergy() {
  return (
    <ServicesSub subpage="energy">
      <div className="title">
        <h1 className="services-sub-title">
          <span>Energy</span>
        </h1>
      </div>
      <div className="energy">
        <h2 className="sub-heading">Fossil Energy (Oil and Gas)</h2>
        <h4>Up stream</h4>
        <p>Exploration and Production</p>
        <h4>Services</h4>
        <p>Geophysical data acquisition and Processing</p>
        <p>Integrated Reservoir Studies/Assets Evaluation</p>
        <p>Geomatics and Hydrographic Surveys</p>
        <p>GIS &amp; Remote Sensing</p>
        <p>Geotechnical</p>
        <h4>QA/QC Consultancy</h4>
        <p>Training</p>
        <p>Manpower Supply</p>
        <h4>Down Stream</h4>
        <p>Petroleum Product Sales and Services</p>
        <p>Petrol (PMS), Diesel (AGO), Kerosene (DPK)</p>
        <p>Engine Oils and other Chemicals</p>
        <h4>Gas</h4>
        <p>Liquefied Petroleum Gas (LPG)</p>
        <p>Liquefied Natural Gas (LNG)</p>
        <p>Compressed Natural Gas (CNG)</p>
        <h4>Renewable Energy</h4>
        <p>Solar Energy</p>
        <p>Wind turbines</p>
      </div>
    </ServicesSub>
  )
}

export default ServicesEnergy
