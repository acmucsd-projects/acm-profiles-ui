import React from "react"
import "./App.css"

import CommunityProfilePage from './pages/community-profile-page';
import SearchPage from './pages/search-page.js';
import UserProfilePage from './pages/user-profile-page.js';
import LogInPage from './pages/log-in-page.js';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/Navbar.js';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/community-profile" component={CommunityProfilePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/my-profile" component={UserProfilePage} />
          <Route path="/login" component={LogInPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App
