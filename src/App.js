import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import CommunityProfilePage from "./pages/community-profile-page"
import LogInPage from "./pages/log-in-page"
import NavigationBar from "./components/NavBar/NavBar"
import SearchPage from "./pages/search-page"
import UserProfilePage from "./pages/user-profile-page"
import "./App.css"

function App() {
  /* TODO: handle authentication properly for redirect */
  const authenticated = true
  const userId = 123456
  /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */

  return (
    <div>
      <Router>
        <Switch>
          <Redirect exact from="/user" to={`/user/${userId}`} />
          <Route path="/user/:id">
            <NavigationBar />
            <UserProfilePage />
          </Route>
          <Route path="/search">
            <NavigationBar />
            <SearchPage />
          </Route>
          <Redirect exact from="/community" to="/search" />
          <Route path="/community/:id">
            <NavigationBar />
            <CommunityProfilePage />
          </Route>
          <Route path="/login">
            {authenticated ? <Redirect to={`/user/${userId}`} /> : <LogInPage />}
          </Route>
          <Route path="/">
            {authenticated ? <Redirect to={`/user/${userId}`} /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
