import { useRef } from "react";

import classes from "./Navbar.module.scss";
import NavElement from "./NavElement";

const Navbar = function () {
  //////////////////////////////////////////////////////////////////////
  // Page navigation
  const navCheckbox = useRef();
  const navBarButton = useRef();

  const handleNavbarClick = function (e) {
    e.preventDefault();
    if (e.target.classList.contains("navbar__link")) {
      // Check whether the burguer is visible
      if (window.getComputedStyle(navBarButton.current).display === 'block') {
        // Close the navigation window before scrolling
        navCheckbox.current.checked = false;
      }

      // Select target and scroll to it
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });;
    }
  };
  return (
    <nav className={classes["navbar"]}>
      <img className={classes["lc"]} src='logos/dark_logo_transparent_background.png' alt='My logo' />

      <input
        type="checkbox"
        className={classes["navbar__checkbox"]}
        id="navi-toggle"
        data-np-checked="1"
        ref={navCheckbox}
      />
      <label
        for="navi-toggle"
        className={classes["navbar__button"]}
        ref={navBarButton}
      >
        <span className={classes["navbar__icon"]}>&nbsp;</span>
      </label>

      <div className={classes["navbar__background"]}>&nbsp;</div>

      <div className={classes["navbar__navigation"]}>
        <ul
          className={`${classes["navbar__list"]} navbar__list`}
          onClick={handleNavbarClick}
        >
          <NavElement text="Interests" href="#interests" />
          <NavElement text="Skills" href="#skills" />
          <NavElement text="Trajectory" href="#trajectory" />
          <NavElement text="Projects" href="#projects" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
