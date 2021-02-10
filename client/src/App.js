import React from "react";

// Importing reacter router dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing the various pages and components
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Rules from "./pages/Rules/Rules"
import ApplicationNavigation from "./components/ApplicationNavigation/ApplicationNavigation"


// The application function
function App() {
  return (
    <BrowserRouter>
      <div>

        {/* Navigation Bar Component */}
        <ApplicationNavigation />

        {/* React Router Switch that will take users between the three pages */}
        <Switch>

          {/* About Page */}
          <Route path="/about">
            <About />
          </Route>

          {/* Contact Page */}
          <Route path="/contact">
            <Contact />
          </Route>

          {/* Rules Page */}
          <Route path="/rules">
            <Rules />
          </Route>

          {/* Home Page */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

// Exporting the application function
export default App;
