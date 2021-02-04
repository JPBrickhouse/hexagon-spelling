import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";



import Home from "./pages/Home"




function App() {
  return (
    <Router>
      <div>

        {/* Navigation Bar that will be able to switch between Home, About the app, and Contact / Meet the Developer*/}

        {/* Router switch to switch between the pages */}

        <Home/>

        {/* Rules for the game */}

        {/* About the App */}

        {/* Contact / Meet the Developer */}


      </div>
    </Router>
  );
}

export default App;
