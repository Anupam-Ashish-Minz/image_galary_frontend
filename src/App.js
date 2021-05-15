import { useState, useEffect } from 'react';
import './App.css';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/home/home';
import About from './routes/about/about';
import Login from './routes/login/login';
import Profile from './routes/profile/profile';
import Navbar from './navbar/navbar';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(()=>{
    fetch("/api/login_status")
      .then(data => data.json())
      .then(data => setLoginStatus(data));
  }, []);

  return (
    <div>
      <Router>
        <Navbar loginStatus={loginStatus} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            { loginStatus ? <Redirect to="/profile" /> : <Login /> }
          </Route>
          <Route exact path="/profile">
            { loginStatus ?  <Profile /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/" render={()=><h1>404</h1>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
