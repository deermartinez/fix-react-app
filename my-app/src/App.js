import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./Components/header";
import Navbar from "./Components/navbar";
import Section from "./Components/section";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import home from "./Pages/home";
import contact from "./Pages/contact";
import about from "./Pages/about";

//components

//components here will go on every page after
function App() {
  return (
    <>
    {/*Empty div here because we are calling more than one variable int he return}
     {/* <div className="App"> */}
      <Header/>
      {/* calls header without formatting on this page*/}
      <Navbar/>
      <Router>
        <Switch>
          <Route exact path = "/" component={home} />
        </Switch>
      </Router>









      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </>
    {/* </div> */}
  );
}

export default App;
