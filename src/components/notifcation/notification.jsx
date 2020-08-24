import React from "react"
import closeIcon from "../../assets/images/close.svg"
import { Link } from "react-router-dom"

import "./notification.scss"

const Notification = ({ show }) => {
  return (
    <div className={`notification ${show ? "open" : ""}`}>
      <div className="notification-alert">
        <Link to="/" className="done">
          <img src={closeIcon} alt="close" />
        </Link>
        <p>Application submitted successfully </p>
      </div>
    </div>
  )
}

export default Notification
