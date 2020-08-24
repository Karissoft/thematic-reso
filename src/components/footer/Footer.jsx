import React from 'react'
import './footer.scss'
import CopyrightIcon from '../../assets/images/icons/copyright.svg'
import FacebookIcon from "../../assets/images/icons/facebook.svg"
import TwitterIcon from "../../assets/images/icons/twitter.svg"
import LinkedinIcon from "../../assets/images/icons/linkedin.svg"
import InstagramIcon from "../../assets/images/icons/instagram.svg"

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <img src={CopyrightIcon} alt="" />
          <span>2020 Thematic Limited</span>
        </div>
        <div className="right">
          <img src={FacebookIcon} alt="" />
          <img src={TwitterIcon} alt="" />
          <img src={LinkedinIcon} alt="" />
          <img src={InstagramIcon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
