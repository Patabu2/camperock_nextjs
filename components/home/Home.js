import Navbar from "./navbar/Navbar";
import Introduction from "./introduction/Introduction";
import Interests from "./interests/Interests";
import Skills from "./skills/Skills";

import classes from './Home.module.scss';

const Home = function () {
  {
    return (
      <div className={classes['container']}>
        <Navbar />
        <Introduction />
        <Interests />
        <Skills />
      </div>
    );
  }
};

export default Home;
