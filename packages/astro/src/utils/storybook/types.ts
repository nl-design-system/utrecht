import type { FrameworkKey } from './frameworks.ts';

export interface CodeTab {
  framework: FrameworkKey;
  label: string;
  lang: string;
  code: string;
}

export type LinkIcon = 'npm' | 'storybook' | 'github' | 'figma';

export interface Link {
  /** Tekst voor de link, bijvoorbeeld `Status (CSS):` */
  prefix?: string;
  href: string;
  label: string;
  icon?: LinkIcon;
  /** Het framework waar de link over gaat. Figma-links gaan over alle frameworks. */
  framework?: FrameworkKey;
}

export interface Tokens {
  /** De tokenboom met een leeg object voor elk token, zoals in de docs */
  json: string;
  /** De waarden van het Utrecht-thema, uit `proprietary/design-tokens`, als het die heeft */
  theme?: string;
  /** Alle CSS custom properties met hun syntax, uitgecommentarieerd */
  css: string;
}

/** Alles wat de website van één component uit de stories haalt */
export interface ComponentDocs {
  badges: string[];
  code: CodeTab[];
  links: Link[];
  tokens?: Tokens;
}
