import classes from "./Projects.module.scss";
import typography from "../../../styles/typography.module.scss";

import Project from "./Project";

const Projects = function () {
  return (
    <section id="projects" className={classes["projects"]}>
      <h2 className={typography["heading-2"]}>Some of my work</h2>
      <h3 className={typography["heading-3"]}>Publications</h3>
      <Project
        title="Deep Learning-based tauopathy biomarker quantification"
        href="https://www.mdpi.com/2079-7737/11/8/1131"
        img="/projects/mdpi.png"
      />
      <h3 className={typography["heading-3"]}>Web Machine Learning</h3>
      <Project title="Auto Machine Learning trainer" />
      <Project title="Stable Diffusion image generator" />

      <h3 className={typography["heading-3"]}>Deep Learning for fun</h3>
      <Project title="Neural Style Transfer" />
      <Project title="DDIM image generation" />
      <Project title="REINFORCE - Deep Reinforcement Learning" />
      <Project title="GAN image generation" />
      <Project title="Time series anomaly detection" />

      <h3 className={typography["heading-3"]}>Machine Learning from scratch</h3>
      <Project title="Neural network from scratch" />
      <Project title="K-Means clustering from scratch" />
      <Project title="Principal Component Analysis (PCA) from scratch" />

      <h3 className={typography["heading-3"]}>Search algorithms</h3>
      <Project
        title="Rubik's cube - A*  algorithm"
        href="https://github.com/Patabu2/rubiks-cube-search"
        img="/projects/github.png"
      />
      <Project
        title="5x5 magic square - Genetic algorithm"
        href="https://github.com/Patabu2/magic-square"
        img="/projects/github.png"
      />
    </section>
  );
};

export default Projects;
