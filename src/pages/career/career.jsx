import React from "react";
import "./career.scss";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";

export default function Career({ sidebar, setSidebar }) {
  return (
    <div className={`career ${sidebar ? "open" : ""}`}>
      <Header sidebar={sidebar} setSidebar={setSidebar} page={"career-page"} />
      <main className="container p-3 p-sm-5">
        <h1>Career</h1>
        <div className="career-pg-heading">
          <h3 className="mb-4">Open positions</h3>
          <div
            class="alert alert-primary alert-dismissible fade show"
            role="alert"
          >
            <strong>No open positions at the moments</strong>
          </div>
        </div>
        <Link to="/apply" className="career-link">
          Join Us
        </Link>
      </main>
      <Footer />
    </div>
  );
}
