import classes from "./Skills.module.scss";

const Skill = function (props) {
  const width = props.params.value;
  const color = props.params.color;
  return (
    <li className={`${classes["skills__skill"]} mb-sm`}>
      <p>{`${props.name}: ${width}`}</p>
      <div className={classes["skills__bar"]}>
        <div
          style={{
            width: `${width}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
          className={classes["skills__progress"]}
        ></div>
      </div>
    </li>
  );
};

export default Skill;
