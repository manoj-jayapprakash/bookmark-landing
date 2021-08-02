import './Social.css';

import fb from '../../assets/images/icon-facebook.svg';
import twitter from '../../assets/images/icon-twitter.svg';

export const Social = (props) => {
  return (
    <ul className={props.cssClass}>
      <li className="social__item">
        <a href="fb.com">
          <img src={fb} alt="Facebook logo" />
        </a>
      </li>
      <li className="social__item">
        <a href="twitter.com">
          <img src={twitter} alt="Twitter logo" />
        </a>
      </li>
    </ul>
  );
};
