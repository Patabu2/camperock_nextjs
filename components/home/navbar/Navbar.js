import classes from "./Navbar.module.scss";
import NavElement from "./NavElement";

const Navbar = function () {

  return (
    <nav className={classes["navbar"]}>
      <p id="lc">
        L<span>/</span>C
      </p>

      <input
        type="checkbox"
        className={classes["navbar__checkbox"]}
        id="navi-toggle"
        data-np-checked="1"
      />
      <label for="navi-toggle" className={classes["navbar__button"]}>
        <span className={classes["navbar__icon"]}>&nbsp;</span>
      </label>

      <div className={classes["navbar__background"]}>&nbsp;</div>

      <div className={classes["navbar__navigation"]}>
        <ul className={`${classes["navbar__list"]} navbar__list`}>
          <NavElement text='Interests' href="#interests" />
          <NavElement text='Skills' href="#skills" />
          <NavElement text='Trajectory' href="#trajectory" />
          <NavElement text='Projects' href="#projects" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
