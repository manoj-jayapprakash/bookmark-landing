import './NavMenu.css';

import { Social } from '../Social/Social';

export const NavMenu = (props) => {
  return (
    <nav className={props.view === 'small' ? 'nav__sm' : 'nav__ld'}>
      <ul className="nav__list">
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
        <li className="nav__item">
          <a href="#features" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <button className="nav__link btn btn-red btn-login">Login</button>
        </li>
      </ul>
      <Social cssClass={props.view === 'large' ? 'hidden' : 'social'} />
    </nav>
  );
};
