import { useState } from 'react';

import { NavMenu } from './NavMenu';
import { Logo } from '../Logo';

import './Header.css';

import hamburger from '../../assets/images/icon-hamburger.svg';
import closeButton from '../../assets/images/icon-close.svg';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header
      className={showMenu ? 'header container active' : 'header container'}
    >
      <Logo theme={showMenu ? 'dark' : 'light'} />
      <button className="nav-btn" onClick={showMobileMenu}>
        <img src={showMenu ? closeButton : hamburger} alt="" />
      </button>
      <NavMenu mobileMenu={showMenu} />
    </header>
  );
};
