import React from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/images/logo.svg"
import { ReactComponent as CloseIcon } from "../../assets/images/close.svg"

import "./services-sub.scss"

const ServicesSub = ({ children, subpage }) => {
  console.log(children)
  return (
    <div className="services-sub">
      <div className={`services-sub-bg-img ${subpage}`}>
        <header className="header">
          <div className="header-content container">
            <Link to="/" className="header-logo">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="container services-sub-info">{children[0]}</div>
        </header>
      </div>
      <div className="services-sub-content">
        {/* CLose Icon */}
        <div className="container">
          <Link to="/services">
            <CloseIcon className="redirect" />
          </Link>
          {/* Content */}
          <div className="details">{children.slice(1)}</div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSub
