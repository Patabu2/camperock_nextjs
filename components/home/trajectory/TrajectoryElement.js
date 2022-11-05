import classes from "./Trajectory.module.scss";
import typography from "../../../styles/typography.module.scss";

const TrajectoryElement = function(props) {
    return <div className={`${classes["trajectory__element"]} mb-md`}>
        <div className={classes["trajectory__years"]}>
            <p className={classes["trajectory__years-years"]}>{props.dates}</p>
            <p className={classes["trajectory__years-title"]}>{props.title}</p>
        </div>
        <div className={classes["trajectory__description"]}>
            <p className={classes["trajectory__description-company"]}>{props.company}</p>
            <p className={classes["trajectory__description-description"]}>{props.description}</p>
        </div>
    </div>
}

export default TrajectoryElement;
