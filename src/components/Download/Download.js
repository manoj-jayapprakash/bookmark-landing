import { Card } from './Card';

import './Download.css';

import chrome from '../../assets/images/logo-chrome.svg';
import firefox from '../../assets/images/logo-firefox.svg';
import opera from '../../assets/images/logo-opera.svg';

export const Download = () => {
  const browsers = [
    {
      id: '1',
      name: 'Chrome',
      version: '62',
      image: chrome,
    },
    {
      id: '2',
      name: 'Firfeox',
      version: '55',
      image: firefox,
    },
    {
      id: '3',
      name: 'Opera',
      version: '46',
      image: opera,
    },
  ];
  return (
    <section className="download container">
      <div className="section__head">
        <h2 className="section__title">Download the extension</h2>
        <p className="section__description">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className="section__body download__cards">
        {browsers.map((browser) => (
          <Card
            key={browser.id}
            id={browser.id}
            browser={browser.name}
            version={browser.version}
            image={browser.image}
          />
        ))}
      </div>
    </section>
  );
};
