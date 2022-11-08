import Head from "next/head";

import Navbar from "./navbar/Navbar";
import Introduction from "./introduction/Introduction";
import Interests from "./interests/Interests";
import Skills from "./skills/Skills";
import Trajectory from "./trajectory/Trajectory";
import Projects from "./projects/Projects";

import classes from "./Home.module.scss";

const Home = function () {
  {
    return (
      <div className={classes["container"]}>
        <Navbar />
        <Introduction />
        <Interests />
        <Skills />
        <Trajectory />
        <Projects />
      </div>
    );
  }
};

export default Home;
