import Bicycles from '@site/static/img/bicycles.png';
import Laptop from '@site/static/img/laptop.png';
import Utrecht from '@site/static/img/utrecht.png';
import clsx from 'clsx';
import React from 'react';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Voor (en door) iedereen',
    image: Bicycles,
    description: (
      <>
        Dankzij het Utrecht Design System kunnen de gemeente en alle leveranciers samenwerken aan een begrijpelijke,
        gebruiksvriendelijke én toegankelijke online dienstverlening.
      </>
    ),
  },
  {
    title: 'Een solide basis',
    image: Utrecht,
    description: (
      <>
        Een solide basis voor ontwerpers en ontwikkelaars. Doordat zij het wiel niet steeds opnieuw hoeven uit te
        vinden, kunnen ze snel en effectief nieuwe digitale producten bouwen.
      </>
    ),
  },
  {
    title: 'Samen met NL Design System',
    image: Laptop,
    description: (
      <>
        Een betrokken, actieve community waarmee meerdere overheidsorganisaties van elkaar kunnen leren en elkaars werk
        kunnen hergebruiken.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
