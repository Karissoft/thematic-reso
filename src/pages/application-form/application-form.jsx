import React from "react"
import Footer from "../../components/footer/Footer"
import "./application-form.scss"
import Notification from "../../components/notifcation/notification"

const ApplicationForm = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [qualification, setQualification] = React.useState("")
  const [cv, setCV] = React.useState("")
  const [isDone, setIsDone] = React.useState(false)
  const applyNow = e => {
    e.preventDefault()
    if (!name || !email || !qualification || !cv) {
      alert("Please, all fields are required")
      return
    }

    setIsDone(true)
  }

  return (
    <div className="apply">
      {/* Notification */}
      <Notification show={isDone} />
      <main className="container">
        <h1>Application Form</h1>
        <form className="apply-form" onSubmit={applyNow}>
          <div className="apply-form-input">
            <input
              type="text"
              className="input"
              placeholder="Enter your full name, surname first"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="apply-form-input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="apply-form-input">
            <input
              type="text"
              name="qualification_type"
              id="qualification_type"
              placeholder="Type your Qualification / Degree"
              className="input"
              value={qualification}
              onChange={e => setQualification(e.target.value)}
            />
          </div>

          <div className="apply-form-upload">
            <span>upload your cv</span>
            <input
              type="file"
              name="cv"
              id="cv"
              value={cv}
              className="custom-file-input"
              onChange={e => setCV(e.target.value)}
            />
          </div>

          <button type="submit" className="apply-btn">
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default ApplicationForm
