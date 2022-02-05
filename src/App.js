import Profile from "./Profile";
import Projects from "./Projects";
import "./styles/App.scss";
import React, { useState, useEffect } from "react";

import Skills from "./Skills";
const App = () => {
  // const classes = useStyles();
  // const { body, gridItem, gridLayout } = classes;

  return (
    <div className="app">
      <Profile />

      <Projects />
      <Projects />
    </div>
  );
};

export default App;
