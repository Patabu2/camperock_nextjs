import classes from './ButtonGlitch.module.scss';

const ButtonGlitch = function(props) {
    return <button className={classes["btn-glitch"]}>{props.text}</button>
}

export default ButtonGlitch;
