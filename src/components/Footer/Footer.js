import './Footer.css';

import { Logo } from '../Logo';
import { Social } from '../Social/Social';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main container">
        <ul className="footer__logo">
          <li>
            <a href="#hero" className="footer__link">
              <Logo logoBgColor="blue" textColor="white" />
            </a>
          </li>
        </ul>

        <ul className="footer__links">
          <li className="footer__item">
            <a href="#features" className="footer__link">
              Features
            </a>
          </li>
          <li className="footer__item">
            <a href="#contact" className="footer__link">
              Pricing
            </a>
          </li>
          <li className="footer__item">
            <a href="#contact" className="footer__link ">
              Contact
            </a>
          </li>
        </ul>
        <Social cssClass="social" />
      </div>
      <p className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://www.frontendmentor.io/profile/manojmj18">
          Manoj Jayapprakash
        </a>
        .
      </p>
    </footer>
  );
};
