import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/home/home';
import About from './routes/about/about';
import Login from './routes/login/login';
import Profile from './routes/profile/profile';
import Navbar from './navbar/navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route path="/" render={()=><h1>404</h1>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
