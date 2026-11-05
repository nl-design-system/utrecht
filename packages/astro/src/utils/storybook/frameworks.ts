export type FrameworkKey = 'css' | 'react' | 'web-component' | 'vue' | 'angular';

export type StorybookKey = 'html' | FrameworkKey;

/** Een Storybook in deze repository */
export interface Storybook {
  key: StorybookKey;
  /** Badge op de overzichtspagina */
  badge: string;
  /** Storybestanden, relatief aan de root van de repository */
  storiesDir: string;
  /** Eerste deel van de titels van de stories in deze Storybook, bijvoorbeeld `CSS Component` */
  titlePrefix: string;
  /** Id van deze Storybook in de samengestelde Storybook (`packages/storybook/config/main.ts`) */
  ref: string;
}

/** Een Storybook met een codetab en links op de componentpagina */
export interface Framework extends Storybook {
  key: FrameworkKey;
  /** Label van de tab en de kop */
  label: string;
  /** Shiki-taal van het codevoorbeeld */
  lang: string;
  /**
   * Hoe het codevoorbeeld van de standaard-story gemaakt wordt:
   * - `html`: render de story met React en toon de HTML
   * - `jsx`: toon de JSX die de story rendert
   * - `static`: lees de code uit de broncode van de story (Vue en Angular draaien niet in Node)
   */
  code: 'html' | 'jsx' | 'static';
  /** npm-pakket met de componenten van dit framework. HTML/CSS gebruikt het CSS-pakket van elke component. */
  packageName?: string;
}

export const FRAMEWORKS: Framework[] = [
  {
    key: 'css',
    label: 'HTML/CSS',
    badge: 'CSS',
    storiesDir: 'packages/storybook-css/src',
    titlePrefix: 'CSS Component',
    ref: 'css',
    lang: 'html',
    code: 'html',
  },
  {
    key: 'react',
    label: 'React',
    badge: 'React',
    storiesDir: 'packages/storybook-react/src/stories',
    titlePrefix: 'React Component',
    ref: 'react',
    lang: 'tsx',
    code: 'jsx',
    packageName: '@utrecht/component-library-react',
  },
  {
    key: 'web-component',
    label: 'Webcomponent',
    badge: 'Web Component',
    storiesDir: 'packages/storybook-web-component/src',
    titlePrefix: 'Web Component',
    ref: 'webcomponent',
    lang: 'html',
    code: 'html',
    packageName: '@utrecht/web-component-library-stencil',
  },
  {
    key: 'vue',
    label: 'Vue',
    badge: 'Vue',
    storiesDir: 'packages/storybook-vue/src/stories',
    titlePrefix: 'Vue.js Component',
    ref: 'vue',
    lang: 'vue-html',
    code: 'static',
    packageName: '@utrecht/component-library-vue',
  },
  {
    key: 'angular',
    label: 'Angular',
    badge: 'Angular',
    storiesDir: 'packages/storybook-angular/src/stories',
    titlePrefix: 'Angular Component',
    ref: 'angular',
    lang: 'angular-html',
    code: 'static',
    packageName: '@utrecht/component-library-angular',
  },
];

/** Alle Storybooks, voor de badges op de overzichtspagina. De HTML Storybook krijgt geen codetab en geen links. */
export const STORYBOOKS: Storybook[] = [
  {
    key: 'html',
    badge: 'HTML',
    storiesDir: 'packages/storybook-html/src',
    titlePrefix: 'HTML Component',
    ref: 'html',
  },
  ...FRAMEWORKS,
];

export const STORYBOOK_URL = 'https://nl-design-system.github.io/utrecht/storybook/';
export const GITHUB_URL = 'https://github.com/nl-design-system/utrecht/tree/main/';
export const GITHUB_NEW_ISSUE_URL = 'https://github.com/nl-design-system/utrecht/issues/new';
export const NPM_URL = 'https://www.npmjs.com/package/';
