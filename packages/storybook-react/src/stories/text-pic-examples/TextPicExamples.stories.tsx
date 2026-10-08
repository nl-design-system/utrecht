import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Figure,
  FigureCaption,
  Image,
  Page,
  PageContent,
  Paragraph,
} from '../../../../component-library-react/src/index.js';
import './styles.css';
import '../styles.css';

const meta = {
  title: 'Template/text-pic examples',
  id: 'template-text-pic-examples',
  component: Page,
  parameters: {
    // Without this, the docs "Show code" panel prints the literal story
    // object source (`render: () => (...)`) instead of the markup it
    // renders. "dynamic" reconstructs JSX from the actual rendered output,
    // so the panel shows plain component code instead.
    docs: { source: { type: 'dynamic' } },
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageTopLeft: Story = {
  name: 'Afbeelding boven, links uitgelijnd',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="example-text-pic-content utrecht-grid utrecht-grid--flex-direction-column utrecht-grid--align-items-flex-start">
          <Figure>
            <Image
              src="example/photo-nijntje-vuelta.jpg"
              width={180}
              height={135}
              photo
              alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
            />
            <FigureCaption>Afbeelding tekst</FigureCaption>
          </Figure>
          <Paragraph appearance="lead">
            Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden binnen
            een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
          </Paragraph>
          <Paragraph>
            Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij de
            afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
          </Paragraph>
        </div>
      </PageContent>
    </Page>
  ),
};

export const ImageTopCenter: Story = {
  name: 'Afbeelding boven, gecentreerd',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="example-text-pic-content utrecht-grid utrecht-grid--flex-direction-column utrecht-grid--align-items-center">
          <Figure>
            <Image
              src="example/photo-nijntje-vuelta.jpg"
              width={180}
              height={135}
              photo
              alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
            />
            <FigureCaption>Afbeelding tekst</FigureCaption>
          </Figure>
          <Paragraph appearance="lead">
            Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden binnen
            een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
          </Paragraph>
          <Paragraph>
            Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij de
            afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
          </Paragraph>
        </div>
      </PageContent>
    </Page>
  ),
};

export const ImageTopRight: Story = {
  name: 'Afbeelding boven, rechts uitgelijnd',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="example-text-pic-content utrecht-grid utrecht-grid--flex-direction-column utrecht-grid--align-items-flex-end">
          <Figure>
            <Image
              src="example/photo-nijntje-vuelta.jpg"
              width={180}
              height={135}
              photo
              alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
            />
            <FigureCaption>Afbeelding tekst</FigureCaption>
          </Figure>
          <Paragraph appearance="lead">
            Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden binnen
            een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
          </Paragraph>
          <Paragraph>
            Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij de
            afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
          </Paragraph>
        </div>
      </PageContent>
    </Page>
  ),
};

export const ImageBottomLeft: Story = {
  name: 'Afbeelding onder, links uitgelijnd',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="example-text-pic-content utrecht-grid utrecht-grid--flex-direction-column-reverse utrecht-grid--align-items-flex-start">
          <Figure>
            <Image
              src="example/photo-nijntje-vuelta.jpg"
              width={180}
              height={135}
              photo
              alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
            />
            <FigureCaption>Afbeelding tekst</FigureCaption>
          </Figure>
          <Paragraph appearance="lead">
            Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden binnen
            een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
          </Paragraph>
          <Paragraph>
            Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij de
            afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
          </Paragraph>
        </div>
      </PageContent>
    </Page>
  ),
};

export const ImageBottomCenter: Story = {
  name: 'Afbeelding onder, gecentreerd',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="example-text-pic-content utrecht-grid utrecht-grid--flex-direction-column-reverse utrecht-grid--align-items-center">
          <Figure>
            <Image
              src="example/photo-nijntje-vuelta.jpg"
              width={180}
              height={135}
              photo
              alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
            />
            <FigureCaption>Afbeelding tekst</FigureCaption>
          </Figure>
          <Paragraph appearance="lead">
            Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden binnen
            een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
          </Paragraph>
          <Paragraph>
            Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij de
            afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
          </Paragraph>
        </div>
      </PageContent>
    </Page>
  ),
};

export const ImageBottomRight: Story = {
  name: 'Afbeelding onder, rechts uitgelijnd',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="example-text-pic-content utrecht-grid utrecht-grid--flex-direction-column-reverse utrecht-grid--align-items-flex-end">
          <Figure>
            <Image
              src="example/photo-nijntje-vuelta.jpg"
              width={180}
              height={135}
              photo
              alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
            />
            <FigureCaption>Afbeelding tekst</FigureCaption>
          </Figure>
          <Paragraph appearance="lead">
            Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden binnen
            een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
          </Paragraph>
          <Paragraph>
            Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij de
            afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
          </Paragraph>
        </div>
      </PageContent>
    </Page>
  ),
};

export const ImageRightColumn: Story = {
  name: 'Afbeelding in de rechterkolom',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="utrecht-grid utrecht-grid--cols-2 utrecht-grid--align-items-flex-start utrecht-grid--spacing-md">
          <div className="utrecht-grid__cell">
            <div>
              <Paragraph appearance="lead">
                Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden
                binnen een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
              </Paragraph>
              <Paragraph>
                Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij
                de afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
              </Paragraph>
            </div>
          </div>
          <div className="utrecht-grid__cell">
            <Figure>
              <Image
                src="example/photo-nijntje-vuelta.jpg"
                width={180}
                height={135}
                photo
                alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
              />
              <FigureCaption>Afbeelding tekst</FigureCaption>
            </Figure>
          </div>
        </div>
      </PageContent>
    </Page>
  ),
};

export const ImageLeftColumn: Story = {
  name: 'Afbeelding in de linkerkolom',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="utrecht-grid utrecht-grid--cols-2 utrecht-grid--align-items-flex-start utrecht-grid--spacing-md">
          <div className="utrecht-grid__cell">
            <Figure>
              <Image
                src="example/photo-nijntje-vuelta.jpg"
                width={180}
                height={135}
                photo
                alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
              />
              <FigureCaption>Afbeelding tekst</FigureCaption>
            </Figure>
          </div>
          <div className="utrecht-grid__cell">
            <div>
              <Paragraph appearance="lead">
                Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden
                binnen een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
              </Paragraph>
              <Paragraph>
                Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij
                de afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
              </Paragraph>
            </div>
          </div>
        </div>
      </PageContent>
    </Page>
  ),
};

export const ImageFloatingLeft: Story = {
  name: 'Afbeelding zwevend naar links',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="example-text-pic--float example-text-pic--float-left">
          <Figure className="example-text-pic__image">
            <Image
              src="example/photo-nijntje-vuelta.jpg"
              width={180}
              height={135}
              photo
              alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
            />
            <FigureCaption>Afbeelding tekst</FigureCaption>
          </Figure>
          <Paragraph appearance="lead">
            Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden binnen
            een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
          </Paragraph>
          <Paragraph>
            Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij de
            afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
          </Paragraph>
        </div>
      </PageContent>
    </Page>
  ),
};

export const ImageFloatingRight: Story = {
  name: 'Afbeelding zwevend naar rechts',
  render: () => (
    <Page className="utrecht-custom-theme">
      <PageContent>
        <div className="example-text-pic--float example-text-pic--float-right">
          <Figure className="example-text-pic__image">
            <Image
              src="example/photo-nijntje-vuelta.jpg"
              width={180}
              height={135}
              photo
              alt="Nijntje mascotte met Vuelta 2022 t-shirt bij het Utrecht stadskantoor"
            />
            <FigureCaption>Afbeelding tekst</FigureCaption>
          </Figure>
          <Paragraph appearance="lead">
            Deze afbeelding en tekst laten zien hoe een foto samen met een tekstblok gepositioneerd kan worden binnen
            een pagina. De plaatsing van de afbeelding bepaalt sterk hoe de inhoud wordt gelezen.
          </Paragraph>
          <Paragraph>
            Gebruik dit soort combinaties bijvoorbeeld bij een nieuwsbericht, productpagina of toelichting, waarbij de
            afbeelding de tekst ondersteunt zonder de leesbaarheid te verstoren.
          </Paragraph>
        </div>
      </PageContent>
    </Page>
  ),
};
