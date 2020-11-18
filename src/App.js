import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CommunityProfilePage from "./pages/community-profile-page"
import LogInPage from "./pages/log-in-page"
import NavigationBar from "./components/NavBar/NavBar"
import SearchPage from "./pages/search-page"
import UserProfilePage from "./pages/user-profile-page"
import "./App.css"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/user">
            <NavigationBar />
            <UserProfilePage />
          </Route>
          <Route path="/search">
            <NavigationBar />
            <SearchPage />
          </Route>
          <Route path="/community">
            <NavigationBar />
            <CommunityProfilePage />
          </Route>
          {/* TODO: conditional routing if user is authenticated */}
          <Route path="/">
            <LogInPage />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
