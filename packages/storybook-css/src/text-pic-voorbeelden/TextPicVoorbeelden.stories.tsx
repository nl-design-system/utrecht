/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import './styles.css';

// This package's docs "Show code" panel (config/preview.tsx's transformSource)
// always reconstructs the shown source from `React.createElement(component, args)` -
// it ignores a story's own `render()` output entirely whenever `meta.component` is
// set (which is always, here). So each layout has to be an args-driven variant of
// one component rather than a custom `render()` per story, or the panel falls back
// to rendering the bare component with no args, i.e. just `<div></div>`.

type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'right-column'
  | 'left-column'
  | 'floating-left'
  | 'floating-right';

interface TextPicVoorbeeldProps {
  position: Position;
}

const image = (
  <figure className="utrecht-figure example-text-pic__image">
    <img
      className="utrecht-img utrecht-img--photo"
      src="example/photo-nijntje-vuelta.jpg"
      width={180}
      height={135}
      alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
    />
    <figcaption className="utrecht-figure__caption">Afbeelding tekst</figcaption>
  </figure>
);

const leadParagraph = (
  <p className="utrecht-paragraph utrecht-paragraph--lead">
    Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden binnen een
    pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
  </p>
);

const bodyParagraph = (
  <p className="utrecht-paragraph">
    Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij de
    afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
  </p>
);

const imageRow = (justifyContent: 'flex-start' | 'center' | 'flex-end') => (
  <div className={`utrecht-grid utrecht-grid--justify-content-${justifyContent}`}>
    <div className="utrecht-grid__cell">{image}</div>
  </div>
);

const stacked = (justifyContent: 'flex-start' | 'center' | 'flex-end', imageFirst: boolean) => (
  <div className="example-text-pic-content">
    {imageFirst ? (
      <>
        {imageRow(justifyContent)}
        {leadParagraph}
        {bodyParagraph}
      </>
    ) : (
      <>
        {leadParagraph}
        {bodyParagraph}
        {imageRow(justifyContent)}
      </>
    )}
  </div>
);

const column = (imageFirst: boolean) => {
  const imageCell = <div className="utrecht-grid__cell">{image}</div>;
  const textCell = (
    <div className="utrecht-grid__cell">
      <div>
        {leadParagraph}
        {bodyParagraph}
      </div>
    </div>
  );

  return (
    <div className="utrecht-grid utrecht-grid--cols-2 utrecht-grid--align-items-flex-start utrecht-grid--spacing-md">
      {imageFirst ? imageCell : textCell}
      {imageFirst ? textCell : imageCell}
    </div>
  );
};

const floating = (side: 'left' | 'right') => (
  <div className={`example-text-pic--float example-text-pic--float-${side}`}>
    {image}
    {leadParagraph}
    {bodyParagraph}
  </div>
);

const TextPicVoorbeeld = ({ position }: TextPicVoorbeeldProps) => {
  let content: React.ReactNode;
  switch (position) {
    case 'top-left':
      content = stacked('flex-start', true);
      break;
    case 'top-center':
      content = stacked('center', true);
      break;
    case 'top-right':
      content = stacked('flex-end', true);
      break;
    case 'bottom-left':
      content = stacked('flex-start', false);
      break;
    case 'bottom-center':
      content = stacked('center', false);
      break;
    case 'bottom-right':
      content = stacked('flex-end', false);
      break;
    case 'right-column':
      content = column(false);
      break;
    case 'left-column':
      content = column(true);
      break;
    case 'floating-left':
      content = floating('left');
      break;
    case 'floating-right':
      content = floating('right');
      break;
  }

  return (
    <div className="utrecht-page utrecht-custom-theme">
      <div className="utrecht-page-content">{content}</div>
    </div>
  );
};

const meta = {
  title: 'Template/text-pic voorbeelden',
  id: 'template-text-pic-voorbeelden',
  component: TextPicVoorbeeld,
  argTypes: {
    position: {
      description: 'Plaatsing van de afbeelding ten opzichte van de tekst',
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'right-column',
        'left-column',
        'floating-left',
        'floating-right',
      ],
    },
  },
} satisfies Meta<typeof TextPicVoorbeeld>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageTopLeft: Story = {
  name: 'Afbeelding boven, links uitgelijnd',
  args: { position: 'top-left' },
};

export const ImageTopCenter: Story = {
  name: 'Afbeelding boven, gecentreerd',
  args: { position: 'top-center' },
};

export const ImageTopRight: Story = {
  name: 'Afbeelding boven, rechts uitgelijnd',
  args: { position: 'top-right' },
};

export const ImageBottomLeft: Story = {
  name: 'Afbeelding onder, links uitgelijnd',
  args: { position: 'bottom-left' },
};

export const ImageBottomCenter: Story = {
  name: 'Afbeelding onder, gecentreerd',
  args: { position: 'bottom-center' },
};

export const ImageBottomRight: Story = {
  name: 'Afbeelding onder, rechts uitgelijnd',
  args: { position: 'bottom-right' },
};

export const ImageRightColumn: Story = {
  name: 'Afbeelding in de rechterkolom',
  args: { position: 'right-column' },
};

export const ImageLeftColumn: Story = {
  name: 'Afbeelding in de linkerkolom',
  args: { position: 'left-column' },
};

export const ImageFloatingLeft: Story = {
  name: 'Afbeelding zwevend naar links',
  args: { position: 'floating-left' },
};

export const ImageFloatingRight: Story = {
  name: 'Afbeelding zwevend naar rechts',
  args: { position: 'floating-right' },
};
