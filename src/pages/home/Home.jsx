import React from "react";
import "./Home.css";
import { AboutMe, MyProjects } from "../../components";

const Home = () => {
  return (
    <div>
      <AboutMe />
      <MyProjects />
    </div>
  );
};

export default Home;
