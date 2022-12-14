import ButtonGlitch from "../../shared_components/ButtonGlitch";

import classes from "./Introduction.module.scss";
import typography from "../../../styles/typography.module.scss";

const Introduction = function () {
  const projectsButtonClick = function (e) {
    // Select target and scroll to it
    document.querySelector('#projects').scrollIntoView({
      behavior: "smooth",
    });
  };

  const resumeButtonOnClick = function() {
    window.open('https://1drv.ms/u/s!Ajzh7FMm_QFbmYkFzjZ_YaB0l9ZSRg?e=5MKdqa')
  }
  return (
    <header className={classes["bio"]}>
      <div className={classes["bio__background-1"]}></div>
      <div className={classes["bio__background-2"]}></div>

      <div className={classes["bio__presentation"]}>
        <div className={classes["bio__picture"]}>
          <img
            src="logos/white_logo_transparent_background.png"
            alt="Picture of me"
          />

          <div className={`${classes["bio__line"]} mb-md`}></div>

          <h4 className={`${typography["heading-4"]} mb-lg`}>
            MSc. Computer Science
          </h4>

          <div className={classes["bio__social"]}>
            <a
              href="https://github.com/Patabu2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={classes["bio__icon"]}>
                <use xlinkHref="img/sprite.svg#icon-github"></use>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-acg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={classes["bio__icon"]}>
                <use xlinkHref="img/sprite.svg#icon-linkedin2"></use>
              </svg>
            </a>
          </div>
        </div>
        <div className={classes["bio__description"]}>
          <h1 className={typography["heading-1"]}>Hello!</h1>
          <h2
            className={`${typography["heading-2"]} ${typography["heading-2--purple"]}`}
          >
            A little bit of what I do:
          </h2>
          <div>
            <ButtonGlitch text="Resume" onClick={resumeButtonOnClick} />
            <ButtonGlitch text="Projects" onClick={projectsButtonClick} />
          </div>

          <p className="mb-sm">
            I am an Artificial Intelligence professional and researcher with a
            curious mind and a continuous desire to learn more about this
            wonderful world and its mysteries.
          </p>
          <p>
            My second passion is Web Development. What would we do without the
            web?
          </p>
        </div>
      </div>
    </header>
  );
};

export default Introduction;
