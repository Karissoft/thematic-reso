import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import LandingPage from "./pages/landing/landing"
import Disclaimer from "./pages/disclaimer/Disclaimer"
import Policy from "./pages/policy/policy"
import AboutUs from "./pages/about-us/AboutUs"
import Contact from "./pages/contact/contact"
import Navbar from "./components/navbar/navbar"
import "./App.scss"
import ServicesMain from "./pages/services-main/ServicesMain"



function App() {
  const [sidebar, setSidebar] = React.useState(false)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/contact" exact>
            <Contact sidebar={sidebar} setSidebar={setSidebar} />
          </Route>

          <Route path="/policy" exact>
            <Policy sidebar={sidebar} setSidebar={setSidebar} />
          </Route>

          <Route path="/about" exact>
            <AboutUs sidebar={sidebar} setSidebar={setSidebar} />
          </Route>
          <Route path="/services">
            <ServicesMain sidebar={sidebar} setSidebar={setSidebar} />
          </Route>

          <Route path="/disclaimer" exact>
            <Disclaimer sidebar={sidebar} setSidebar={setSidebar} />
          </Route>

          <Route path="/" exact>
            <LandingPage sidebar={sidebar} setSidebar={setSidebar} />
          </Route>
        </Switch>
        {/* NavBar */}
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      </Router>
    </div>
  )
}

export default App
