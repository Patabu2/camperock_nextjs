import classes from "./Skills.module.scss";
import typography from "../../../styles/typography.module.scss";

import SkillSection from "./SkillSection";

const programmingDevOps = [
  ['Python', {color: 'orange', value: 90}],
  ['JavaScript', {color: 'orange', value: 90}],
  ['Node.js', {color: 'orange', value: 65}],
  ['HTML & CSS', {color: 'orange', value: 85}],
  ['Docker', {color: 'orange', value: 50}],
  ['Databases (SQL & No SQL)', {color: 'orange', value: 85}],
];

const deepLearning = [
  ['Computer Vision', {color: 'orangered', value: 90}],
  ['Generative Deep Learning', {color: 'orangered', value: 65}],
  ['Deep Reinforcement Learning', {color: 'orangered', value: 50}],
  ['Time Series Analysis', {color: 'orangered', value: 65}]
]

const dataAnalytics = [
  ['Visualization', {color: 'cornflowerblue', value: 95}],
  ['Teaching/Presenting', {color: 'cornflowerblue', value: 100}],
  ['Machine Learning', {color: 'cornflowerblue', value: 70}],
  ['Statistical Methods', {color: 'cornflowerblue', value: 59}]
]

const languages = [
  ['German', {color: 'green', value: 65}],
  ['English', {color: 'green', value: 100}],
  ['Spanish', {color: 'green', value: 100}]
];

const Skills = function () {
  return (
    <section className={classes["skills"]} id="skills">
      <div>
        <h2
          className={`${typography["heading-2"]} ${typography["heading-2--light"]} mb-md`}
        >
          Stats
        </h2>
      </div>
      <div className={classes["skills__display"]}>
        <SkillSection title='Programming & DevOps' skills={programmingDevOps} />
        <SkillSection title='Deep Learning (TensorFlow)' skills={deepLearning} />
        <SkillSection title='Data Analytics' skills={dataAnalytics} />
        <SkillSection title='Languages' skills={languages} />
      </div>
    </section>
  );
};

export default Skills;
