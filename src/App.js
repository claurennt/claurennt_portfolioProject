import Profile from "./Profile";
import Projects from "./Projects";
import "./styles/App.scss";
import React from "react";

import Skills from "./Skills";
const App = () => {
  // const classes = useStyles();
  // const { body, gridItem, gridLayout } = classes;

  return (
    <div className="app">
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
