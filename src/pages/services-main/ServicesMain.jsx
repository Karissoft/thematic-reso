import React from "react"
import "./services-main.scss"
import { withRouter, Route } from "react-router-dom"
import Services from "../services/Services"
import ServicesEnergy from "../../components/services-energy/ServicesEnergy"
import ServicesFarm from "../../components/services-farm/ServicesFarm"
import ServicesTourism from "../../components/services-tourism/ServicesTourism"
import ServicesLife from "./../../components/services-life/ServicesLife"

function ServicesMain({ match, sidebar, setSidebar }) {
  return (
    <div className={`services-main ${sidebar ? "open" : ""}`}>
      <Route
        exact
        path={`${match.path}`}
        render={() => <Services sidebar={sidebar} setSidebar={setSidebar} />}
      />
      <Route exact path={`${match.path}/energy`} component={ServicesEnergy} />
      <Route exact path={`${match.path}/farming`} component={ServicesFarm} />
      <Route
        exact
        path={`${match.path}/portable-water`}
        component={ServicesLife}
      />
      <Route exact path={`${match.path}/tourism`} component={ServicesTourism} />
    </div>
  )
}

export default withRouter(ServicesMain)
