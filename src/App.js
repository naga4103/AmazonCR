import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <About />
      <Home />
      <Contact />
    </div>
  );
};

export default App;
