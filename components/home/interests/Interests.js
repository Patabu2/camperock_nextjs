import classes from "./Interests.module.scss";
import typography from "../../../styles/typography.module.scss";

import Interest from "./Interest";

const Interests = function () {
  return (
    <section className={classes["interests"]} id="interests">
      <h2
        className={`${classes["heading-2"]} ${typography["heading-2"]} ${typography["heading-2--purple"]}`}
      >
        Interests
      </h2>
      <Interest
        title="Artificial Intelligence"
        content="My experience ranges from ingenious search algorithms to machine and deep learning. What's not to love?"
        icon="img/sprite.svg#icon-cogs"
      />
      <Interest
        title="Deep Learning"
        content="One of the most powerful technological achievements of humanity so far. Exploring and exploiting its power is in my destiny."
        icon="img/sprite.svg#icon-terminal"
      />
      <Interest
        title="Data analytics"
        content="I enjoy finding a story to tell, and coming up with a business solution."
        icon="img/sprite.svg#icon-stats-dots"
      />
      <Interest
        title="Web Development"
        content="The world is more connected than ever before, and I am more excited than ever before about it."
        icon="img/sprite.svg#icon-embed2"
      />
      <Interest
        title="Computational neurosciences"
        content="How can machines help us understand ourselves? How can we replicate what billions of years of evolution did? Oh my..."
        icon="img/sprite.svg#icon-accessibility"
      />
      <Interest
        title="Research"
        content="&ldquo;I can live with doubt and uncertainty. I think it is much more intersting to live not knowing than to have answers which might be wrong.&rdquo; -Richard Feynman"
        icon="img/sprite.svg#icon-books"
      />
    </section>
  );
};

export default Interests;
