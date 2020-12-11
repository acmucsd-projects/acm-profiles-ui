import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import CommunityProfilePage from "./pages/community-profile-page"
import LogInPage from "./pages/log-in-page"
import NavigationBar from "./components/NavBar/NavBar"
import SearchPage from "./pages/search-page"
import UserProfilePage from "./pages/user-profile-page"
import "./App.css"

function App() {
  /* TODO: handle authentication properly for redirect */
  const [authenticated, setAuthenticated] = useState(false)
  const [userId, setUserId] = useState(-1)

  /* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */

  return (
    <div>
      <Router>
        <Switch>
          <Redirect exact from="/user" to={`/user/${userId}`} />
          <Route path="/user/:id">
            {!authenticated ? (
              <Redirect to="/login" />
            ) : (
              <>
                <NavigationBar setAuthenticated={setAuthenticated} setUserId={setUserId} />
                <UserProfilePage />
              </>
            )}
          </Route>
          <Route path="/search">
            {!authenticated ? (
              <Redirect to="/login" />
            ) : (
              <>
                <NavigationBar setAuthenticated={setAuthenticated} setUserId={setUserId} />
                <SearchPage />
              </>
            )}
          </Route>
          <Redirect exact from="/community" to="/search" />
          <Route path="/community/:id">
            {!authenticated ? (
              <Redirect to="/login" />
            ) : (
              <>
                <NavigationBar setAuthenticated={setAuthenticated} setUserId={setUserId} />
                <CommunityProfilePage />
              </>
            )}
          </Route>
          <Route path="/login">
            {authenticated ? (
              <Redirect to={`/user/${userId}`} />
            ) : (
              <LogInPage setAuthenticated={setAuthenticated} setUserId={setUserId} />
            )}
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
