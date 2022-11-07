import classes from "./Projects.module.scss";
import typography from "../../../styles/typography.module.scss";

import Link from "next/link";

const Project = function (props) {
  return (
    <Link href={props.href || "/"}>
      <div
        className={classes["project"]}
        style={{
          backgroundImage: `linear-gradient(
          to bottom,
            rgba(145, 107, 191, 0.5),
            rgba(28, 12, 91, 0.9)
          ), url(${props.img || '/logos/dark_logo_transparent_background.png'})`,
          backgroundSize: `${props.img ? '100%' : '50%'}`
        }}
      >
        <h3 className={typography["heading-3"]}>{props.title}</h3>
      </div>
    </Link>
  );
};

export default Project;
