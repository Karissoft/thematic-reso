import React from "react";
import Footer from "../../components/footer/Footer";
import "./application-form.scss";
import Notification from "../../components/notifcation/notification";
import Header from "../../components/header/header";

const ApplicationForm = ({ sidebar, setSidebar }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [cv, setCV] = React.useState("");
  const [isDone, setIsDone] = React.useState(false);
  const applyNow = (e) => {
    e.preventDefault();
    if (!name || !email || !qualification || !cv) {
      alert("Please, all fields are required");
      return;
    }

    setIsDone(true);
  };

  return (
    <div className="apply">
      <Header sidebar={sidebar} setSidebar={setSidebar} page={"about-page"} />
      {/* Notification */}
      <Notification show={isDone} />
      <main className="container">
        <h1 className="text-center mb-5">Application Form</h1>
        <form className="apply-form" onSubmit={applyNow}>
          <div className="apply-form-input">
            <input
              type="text"
              className="input border"
              placeholder="Enter your full name, surname first"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="apply-form-input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="input form-control  border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="apply-form-input">
            <input
              type="text"
              name="qualification_type"
              id="qualification_type"
              placeholder="Type your Qualification / Degree"
              className="input border"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>

          <div className="apply-form-upload">
            <label>Upload your CV</label>
            <input
              type="file"
              name="cv"
              id="cv"
              value={cv}
              className="custom-file-input border"
              onChange={(e) => setCV(e.target.value)}
            />
          </div>

          <button type="submit" className="apply-btn">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ApplicationForm;
