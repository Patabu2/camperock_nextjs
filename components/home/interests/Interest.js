import classes from "./Interests.module.scss";
import typography from "../../../styles/typography.module.scss";

const Interest = function (props) {
  return (
    <div className={classes["interest"]}>
      <svg className={classes["interests__icon"]}>
        <use xlinkHref={props.icon}></use>
      </svg>
      <h4 className={typography["heading-4"]}>{props.title}</h4>
      <p className={classes["interest__text"]}>{props.content}</p>
    </div>
  );
};

export default Interest;
