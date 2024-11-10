import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  IconBrandAngular,
  IconBrandFigma,
  IconBrandReact,
  IconBrandVue,
  IconCode,
  IconHtml,
  IconPalette,
  IconWorldWww,
} from '@tabler/icons-react';
import Layout from '@theme/Layout';
import { Icon, Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import React from 'react';
import styles from './index.module.css';
import { Card } from '../components/Card';
import { CardList } from '../components/CardList';
import HomepageFeatures from '../components/HomepageFeatures';
import './global.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/tmp/basis/introductie">
            Voor wie is het design system? - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={`${siteConfig.title}: ${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <h2>Aan de slag als developer of designer</h2>
          <CardList>
            {[
              {
                title: 'React',
                image: (
                  <Icon>
                    <IconBrandReact />
                  </Icon>
                ),
                description: <>Documentatie in Storybook voor React componenten.</>,
                href: 'https://nl-design-system.github.io/utrecht/storybook-react/',
              },
              {
                title: 'Design Tokens',
                image: (
                  <Icon>
                    <IconPalette />
                  </Icon>
                ),
                description: <>De huisstijl van Utrecht voor alle platformen.</>,
                href: 'https://www.npmjs.com/package/@utrecht/design-tokens',
              },
              {
                title: 'Figma',
                image: (
                  <Icon>
                    <IconBrandFigma />
                  </Icon>
                ),
                description: <>Componenten in Figma, om nieuwe websites en prototypes mee te ontwerpen.</>,
                href: 'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/',
              },
              {
                title: 'HTML + CSS',
                image: (
                  <Icon>
                    <IconWorldWww />
                  </Icon>
                ),
                description: (
                  <>Documentatie in Storybook voor "vanilla" componenten met gewoon CSS en HTML met class names.</>
                ),
                href: 'https://nl-design-system.github.io/utrecht/storybook-css/',
              },
              {
                title: 'Angular',
                image: (
                  <Icon>
                    <IconBrandAngular />
                  </Icon>
                ),
                description: <>Documentatie in Storybook Angular componenten.</>,
                href: 'https://nl-design-system.github.io/utrecht/storybook-angular/',
              },
              {
                title: 'Vue.js',
                image: (
                  <Icon>
                    <IconBrandVue />
                  </Icon>
                ),
                description: <>Documentatie in Storybook voor Vue.js componenten.</>,
                href: 'https://nl-design-system.github.io/utrecht/storybook-vue/',
              },
              {
                title: 'Web Componenten',
                image: (
                  <Icon>
                    <IconCode />
                  </Icon>
                ),
                description: <>Documentatie in Storybook voor Web Componenten.</>,
                href: 'https://nl-design-system.github.io/utrecht/storybook-web-component/',
              },
              {
                title: 'Vanilla HTML',
                image: (
                  <Icon>
                    <IconHtml />
                  </Icon>
                ),
                description: <>Documentatie in Storybook voor het opmaken van HTML zonder class names.</>,
                href: 'https://nl-design-system.github.io/utrecht/storybook-html/',
              },
            ].map(({ title, description, href, image }) => (
              <Card heading={title} headingLevel={3} href={href} image={image}>
                <Paragraph>{description}</Paragraph>
              </Card>
            ))}
          </CardList>
        </div>
      </main>
    </Layout>
  );
}
