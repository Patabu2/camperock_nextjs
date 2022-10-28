import classes from "./Navbar.module.scss";

const NavElement = function (props) {
  const handleHover = function (e) {
    if (e.target.classList.contains("navbar__link")) {
      const link = e.target;
      const siblings = link
        .closest(".navbar__list")
        .querySelectorAll(".navbar__link");
      
      const opacity = e.type === 'mouseenter' ? 0.5 : 1;

      siblings.forEach((el) => {
        if (el != link) el.style.opacity = opacity;
      });
    }
  };

  return (
    <li
      className={classes["navbar__element"]}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a
        className={`${classes["navbar__link"]} navbar__link`}
        href={props.href}
      >
        {props.text}
      </a>
    </li>
  );
};

export default NavElement;
