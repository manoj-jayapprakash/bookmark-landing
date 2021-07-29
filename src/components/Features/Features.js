import { useState } from 'react';

import './Features.css';

import { Feature } from './Feature';

import featureOneImage from './../../assets/images/illustration-features-tab-1.svg';
import featureTwoImage from './../../assets/images/illustration-features-tab-2.svg';
import featureThreeImage from './../../assets/images/illustration-features-tab-3.svg';

export const Features = () => {
  const features = [
    {
      id: '1',
      name: 'Bookmark in one click',
      image: featureOneImage,
      description:
        'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    },
    {
      id: '2',
      name: 'Intelligent search',
      image: featureTwoImage,
      description:
        'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    },
    {
      id: '3',
      name: 'Share your bookmarks',
      image: featureThreeImage,
      description:
        'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    },
  ];

  const [activeFeature, setActiveFeature] = useState(features[0]);

  const tabClickHandler = (e) => {
    const feature = features.filter((f) => f.id === e.target.dataset.id)[0];
    setActiveFeature(feature);
  };

  return (
    <section className="features container">
      <div className="features__head">
        <h2 className="section__title">Features</h2>
        <p className="section__description">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="features__body">
        <div className="features__tab">
          <button
            className={
              activeFeature.id === '1'
                ? 'btn-features__tab active btn-features__tab-one'
                : 'btn-features__tab btn-features__tab-one'
            }
            onClick={tabClickHandler}
            data-id="1"
          >
            Simple Bookmarking
          </button>

          <button
            className={
              activeFeature.id === '2'
                ? 'btn-features__tab active '
                : 'btn-features__tab  '
            }
            onClick={tabClickHandler}
            data-id="2"
          >
            Speedy Searching
          </button>
          <button
            className={
              activeFeature.id === '3'
                ? 'btn-features__tab active '
                : 'btn-features__tab '
            }
            onClick={tabClickHandler}
            data-id="3"
          >
            Easy Sharing
          </button>
        </div>

        <Feature
          id={activeFeature.id}
          title={activeFeature.name}
          image={activeFeature.image}
          description={activeFeature.description}
        />
      </div>
    </section>
  );
};
