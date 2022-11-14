import classes from "./Projects.module.scss";
import typography from "../../../styles/typography.module.scss";

import Project from "./Project";

const Projects = function () {
  /*
  <h3 className={typography["heading-3"]}>Web Machine Learning</h3>
  <Project title="Auto Machine Learning trainer" />
  <Project title="Stable Diffusion image generator" />

        <Project title="GAN image generation" />
      <Project title="Time series anomaly detection" />
            <Project title="DDIM image generation" />

        <Project title="Neural network from scratch" />
*/

  return (
    <section id="projects" className={classes["projects"]}>
      <h2 className={typography["heading-2"]}>Some of my work</h2>
      <h3 className={typography["heading-3"]}>Publications</h3>
      <Project
        title="Deep Learning-based tauopathy biomarker quantification"
        href="https://www.mdpi.com/2079-7737/11/8/1131"
        img="/projects/mdpi.png"
      />

      <h3 className={typography["heading-3"]}>Deep Learning for fun</h3>
      <Project
        title="Neural Style Transfer"
        href="https://github.com/Patabu2/Neural-Style-Transfer"
        img="/tiger.jpg"
      />
      <Project
        title="REINFORCE - Deep Reinforcement Learning"
        href="https://github.com/Patabu2/REINFORCE"
        img="https://user-images.githubusercontent.com/46114496/200649849-6c81d412-4175-43c0-930a-5eb592a1f909.png"
      />

      <h3 className={typography["heading-3"]}>Machine Learning from scratch</h3>
      <Project
        title="K-Means clustering from scratch"
        img="/projects/github.png"
        href="https://github.com/Patabu2/machine_learning_from_scratch/blob/main/K-Means.ipynb"
      />
      <Project
        title="Principal Component Analysis (PCA) from scratch"
        img="/projects/github.png"
        href="https://github.com/Patabu2/machine_learning_from_scratch/blob/main/PCA.ipynb"
      />

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
