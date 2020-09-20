import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route} from "react-router-dom";
import Splash from './components/splash/splash';
import { HashRouter } from "react-router-dom";
function App() {
  return(
    <HashRouter>
      <Route path ='/' component={Splash}/>

    </HashRouter>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
