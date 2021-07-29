import './Hero.css';

import heroImage from '../../assets/images/illustration-hero.svg';

export const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__image-wrapper">
        <img src={heroImage} alt="" className="hero__image" />
      </div>
      <div className="hero__text">
        <h2 className="hero__title">A Simple Bookmark Manager</h2>
        <p className="description">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="hero__links">
          <a href="#download" className="hero__link hero__link-chrome">
            Get it on Chrome
          </a>
          <a href="#download" className="hero__link hero__link-firefox">
            Get it on Firefox
          </a>
        </div>
      </div>
    </section>
  );
};
