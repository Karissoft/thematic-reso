import React from 'react';
import "./career.scss"
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import { Link } from 'react-router-dom';

export default function Career({ sidebar, setSidebar }) {
  return (
    <div className={`career ${sidebar ? "open" : ""}`}>
      <Header
        sidebar={sidebar}
        setSidebar={setSidebar}
        page={"career-page"}
      />
      <main className="container">
        <h1>Career</h1>
        <div className="career-pg-heading">
          <h3>Open positions</h3>
          <p>No open positions at the moments</p>
        </div>
        <Link to='/' className='career-link'>Join Us
</Link>

      </main>
      <Footer />
    </div>
  )
}

