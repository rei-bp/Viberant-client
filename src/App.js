import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Welcome from './components/Welcome'

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <div className="App">
        <Switch>

          <Route
            exact path="/"
            component={ Welcome }
          />

          <Route
            path="/register"
            render={ props => <Register {...props} /> }
          />

          <Route
            path="/login"
            render={ props => <Login {...props} /> }
          />

          {/* eventually do a conditional render here */}
          <Route
            path="/profile"
            render={ props => <Profile {...props} /> }
          />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
