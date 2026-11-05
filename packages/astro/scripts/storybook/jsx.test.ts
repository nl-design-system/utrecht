import { createElement, useState } from 'react';
import { describe, expect, it } from 'vitest';
import { elementToJsx, unwrapStoryComponents } from './jsx.ts';

describe('elementToJsx', () => {
  it('writes string, true, number and object props', () => {
    const element = createElement('Button', { appearance: 'primary', disabled: true, count: 3, style: { gap: 1 } });
    expect(elementToJsx(element)).toBe('<Button appearance="primary" disabled count={3} style={{ gap: 1 }} />');
  });

  it('leaves out undefined and null props', () => {
    expect(elementToJsx(createElement('Button', { label: undefined, icon: null }))).toBe('<Button />');
  });

  it('writes functions as an empty arrow function', () => {
    expect(elementToJsx(createElement('Button', { onClick: () => 1 }))).toBe('<Button onClick={() => {}} />');
  });

  it('escapes braces and angle brackets in text', () => {
    expect(elementToJsx(createElement('Code', null, 'a {b} <c>'))).toBe("<Code>a {'{'}b{'}'} {'<'}c{'>'}</Code>");
  });

  it('uses the display name of a component', () => {
    const Card = () => null;
    Card.displayName = 'UtrechtCard';
    expect(elementToJsx(createElement(Card, null, createElement('p', null, 'Tekst')))).toBe(
      '<UtrechtCard><p>Tekst</p></UtrechtCard>',
    );
  });
});

describe('unwrapStoryComponents', () => {
  it('shows what a story wrapper returns', () => {
    const ButtonStory = ({ label }: { label: string }) => createElement('Button', null, label);
    const element = unwrapStoryComponents(createElement(ButtonStory, { label: 'Opslaan' }));
    expect(elementToJsx(element)).toBe('<Button>Opslaan</Button>');
  });

  it('keeps a wrapper that uses hooks', () => {
    const CounterStory = () => {
      useState(0);
      return createElement('Counter');
    };
    const element = createElement(CounterStory);
    expect(unwrapStoryComponents(element)).toBe(element);
  });
});
