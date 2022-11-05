import classes from "./Projects.module.scss";
import typography from "../../../styles/typography.module.scss";

import Link from "next/link";

const Project = function (props) {
  return (
    <Link href="/about">
      <div className={classes["project"]}>
        <h3 className={typography["heading-3"]}>{props.title}</h3>
      </div>
    </Link>
  );
};

export default Project;
