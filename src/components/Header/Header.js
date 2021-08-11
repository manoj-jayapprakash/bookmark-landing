import { useState } from 'react';

import { NavMenu } from './NavMenu';
import { Logo } from '../Logo';

import './Header.css';

import hamburger from '../../assets/images/icon-hamburger.svg';
import closeButton from '../../assets/images/icon-close.svg';

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <header className={mobileMenu ? 'header header-bg' : 'header container'}>
      <div className="main-nav">
        {mobileMenu ? (
          <Logo logoBgColor="white" textColor="white" />
        ) : (
          <Logo logoBgColor="blue" textColor="blue" />
        )}

        <button className="btn-nav" onClick={showMobileMenu}>
          <img
            src={mobileMenu ? closeButton : hamburger}
            alt=""
            className="icon-menu"
          />
        </button>
        <NavMenu view={mobileMenu ? 'small' : 'large'} />
      </div>
    </header>
  );
};
