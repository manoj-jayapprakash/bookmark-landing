import './NavMenu.css';

import { Social } from '../Social/Social';

export const NavMenu = (props) => {
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
        <li className="nav__item">
          <button className="btn btn-login">Login</button>
        </li>
      </ul>
      <Social cssClass={props.mobileMenu ? 'social' : 'hidden'} />
    </nav>
  );
};
