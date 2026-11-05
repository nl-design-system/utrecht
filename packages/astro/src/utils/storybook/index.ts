/**
 * De documentatie die `scripts/extract-storybook.ts` uit de stories haalt, per component. Het script draait voor
 * `dev` en `build`. Na een wijziging in een story draai je `pnpm run extract-storybook` opnieuw.
 */
import type { ComponentDocs } from './types.ts';
import data from '../../generated/storybook.json';

export type * from './types.ts';

const docs = data as Record<string, ComponentDocs>;

const get = (component: string): ComponentDocs | undefined => docs[component.toLowerCase()];

export const getFrameworkBadges = (component: string) => get(component)?.badges ?? [];
export const getCode = (component: string) => get(component)?.code ?? [];
export const getLinks = (component: string) => get(component)?.links ?? [];
export const getTokens = (component: string) => get(component)?.tokens;
