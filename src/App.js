import { React, Fragment } from "react"
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CommunityProfilePage from "./pages/community-profile-page"
import SearchPage from "./pages/search-page"
import UserProfilePage from "./pages/user-profile-page"
import LogInPage from "./pages/log-in-page"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavigationBar } from "./components/Navbar"

function App() {
  return (
    <Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/community-profile" component={CommunityProfilePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/my-profile" component={UserProfilePage} />
          <Route path="/login" component={LogInPage} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
