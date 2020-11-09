import React from "react"
import { Switch, Route } from "react-router-dom"
import CommunityProfilePage from "./pages/community-profile-page"
import LogInPage from "./pages/log-in-page"
import Navbar from "./components/navbar"
import SearchPage from "./pages/search-page"
import UserProfilePage from "./pages/user-profile-page"
import "./App.css"

function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/user">
          <UserProfilePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/community">
          <CommunityProfilePage />
        </Route>
        <Route path="/">
          <LogInPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
