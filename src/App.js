import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Register from './pages/Register/Register.js';
import Profile from './pages/Profile/Profile.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>s
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/register" >
          <Register />
        </Route>
        <Route path="/profile/:username" >
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
