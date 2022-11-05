import classes from "./Projects.module.scss";
import typography from "../../../styles/typography.module.scss";

import Project from "./Project";

const Projects = function () {
  return (
    <section id="projects" className={classes["projects"]}>
      <h2 className={typography["heading-2"]}>Some of my work</h2>
      <Project title='Neural Style Transfer' />
      <Project title='DDIM image generation'/>
      <Project title='REINFORCE - Deep Reinforcement Learning' />
      <Project title='GAN image generation' />
      <Project title='Time series anomaly detection' />
      <Project title="Rubik's cube - A*  algorithm" />
      <Project title='5x5 magic square - Genetic algorithm' />
    </section>
  );
};

export default Projects;
