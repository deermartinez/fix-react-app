import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from "./Components/header";
import Navbar from "./Components/navbar";

// import section from "./Components/section"


import home from "./Pages/home";
import contact from "./Pages/contact";
// import { render } from "react-dom";




function App(){
  return(
    <>
    <Header />
      <Router>
        <Switch>
          <Route exact path ='/' component = {home}/>
          <Route exact path = '/' exact path ={contact}/>

        </Switch>
      </Router>


    </>



  )
}
















//components

//components here will go on every page after
// function App() {
//   render(){
//   return (
//     <>
//     {/*Empty div here because we are calling more than one variable int he return}
//      {/* <div className="App"> */}
//       <Header/>
//       {/* calls header without formatting on this page*/}
//       <Navbar/>
//       <Router>
//         <Switch>
//           <Route exact path = "/" component={home} />
//           <Route exact path = "/contact" component={contact} />
//           <Route exact path = "/about" component={about} />
//           <Route exact path = "/extra" component={extra} />
//         </Switch>
//       </Router>
//       </>
// //code from beginning
//       // {/* <header className="App-header">
//       //   <img src={logo} className="App-logo" alt="logo" />
//       //   <p>
//       //     Edit <code>src/App.js</code> and save to reload.
//       //   </p>
//       //   <a
//       //     className="App-link"
//       //     href="https://reactjs.org"
//       //     target="_blank"
//       //     rel="noopener noreferrer"
//       //   >
//       //     Learn React
//       //   </a>
//       // </header> */}
    
// //     {/* </div> */}
//     }
//   );
// }

export default App;
