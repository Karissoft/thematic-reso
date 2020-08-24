import React from "react"
import { Link } from "react-router-dom"

import logo from "../../assets/images/logo.svg"
import bars from "../../assets/images/bars.svg"

import "./header.scss"

const Header = ({ sidebar, setSidebar, page }) => {
  return (
    <header className={`${page} header`}>
      <div className="header-content container">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Logo" />
        </Link>
        {/* toggler */}
        {!sidebar && (
          <div className="header-toggler">
            <span className="toggler-title">Menu</span>
            <img
              src={bars}
              alt="toggler"
              onClick={() => setSidebar(!sidebar)}
            />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
