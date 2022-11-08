import TrajectoryElement from "./TrajectoryElement";

import classes from "./Trajectory.module.scss";
import typography from "../../../styles/typography.module.scss";

const TrajectorySection = function (props) {
  return (
    <> 
      <h3 className={typography['heading-3']}>{props.title}</h3>
      <div className={classes["trajectory__section"]}>
        {
          props.data.map((el, i) => {
            return <TrajectoryElement key={i} dates={el.dates} title={el.title} company={el.company} description={el.description} />
          })
        }
      </div>
    </>
  );
};

export default TrajectorySection;
