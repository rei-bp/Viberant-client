import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Welcome from './components/Welcome'

function App() {
  // state holds user data if the user is logged in
  const [currentUser, setCurrentUser] = useState(null)

  // if user navigates away automatically log them in (if the jwt is valid)
  useEffect(() => {})

  // function to log the user out
  const handleLogout = () => {
    console.log('log the user out!')
  }

  return (
    <Router>

      <header>
        <Navbar
          currentUser={ currentUser }
          handleLogout={ handleLogout }
        />
      </header>

      <div className="App">
        <Switch>

          <Route
            exact path="/"
            component={ Welcome }
          />

          <Route
            path="/register"
            render={ props => <Register {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
          />

          <Route
            path="/login"
            render={ props => <Login {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
          />

          {/* eventually do a conditional render here */}
          <Route
            path="/profile"
            render={ props => <Profile {...props} currentUser={ currentUser } setCurrentUser={ setCurrentUser } /> }
          />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
