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
        <Home/>
      </div>
    </Router>
  );
}

export default App;
