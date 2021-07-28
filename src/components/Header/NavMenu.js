import './NavMenu.css';

import fb from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';

export const NavMenu = (props) => {
  console.log(props.mobileMenu);
  return (
    <nav className={props.mobileMenu ? 'nav__menu active' : 'nav__menu'}>
      <ul className="nav__list nav__list--primary">
        <li className="nav__item">
          <a href="#features" className="nav__link">
            Features
          </a>
        </li>
        <li className="nav__item">
          <a href="#features" className="nav__link">
            Pricing
          </a>
        </li>
        <li className="nav__item nav__item-contact">
          <a href="#features" className="nav__link ">
            Contact
          </a>
        </li>
        <li className="nav__item nav__item-login">
          <a href="#features" className="nav__link nav__link-ld">
            Login
          </a>
        </li>
      </ul>
      <ul className="nav__list nav__list--secondary">
        <li className="nav__item">
          <a href="#features">
            <img src={fb} alt="" />
          </a>
        </li>
        <li className="nav__item">
          <a href="#features">
            <img src={twitter} alt="" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
