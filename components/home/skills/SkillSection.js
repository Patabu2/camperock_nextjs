import classes from "./Skills.module.scss";
import typography from "../../../styles/typography.module.scss";

import Skill from "./Skill";

const SkillSection = function (props) {
  return (
    <div className={classes["skills__skill"]}>
      <h4 className={typography["heading-4"]}>{props.title}</h4>
      <ul className={classes["skills__list"]}>
        {props.skills.map((value, i) => {
          return <Skill name={value[0]} params={value[1]} key={i} />
        })}
      </ul>
    </div>
  );
};

export default SkillSection;
