import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import ProtectedRoutes from './components/prtectedRoutes/ProtectedRoutes.jsx';
import Movie from './components/movie/Movie';

class App extends Component {
  render() {
    return (
      <>
        <Route path="/" component={Navbar}/>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />
        <Route path="/Movie" component={Movie} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
      </>
    );
  }
}

export default App;
