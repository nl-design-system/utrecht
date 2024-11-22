/* eslint-disable react/react-in-jsx-scope */
import { Body } from '@utrecht/body-react/dist/index.mjs';
import { Heading, Paragraph } from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react/dist/index.mjs';
import { PageFooter } from '@utrecht/page-footer-react/dist/index.mjs';
import { PageHeader } from '@utrecht/page-header-react/dist/index.mjs';
import { PageLayout } from '@utrecht/page-layout-react/dist/index.mjs';
import { Root } from '@utrecht/root-react/dist/index.mjs';
import { readFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { PropsWithChildren } from 'react';
import { renderToString } from 'react-dom/server';
import { compress } from 'wasm-brotli';

const readImport = (path) => {
  return readFile(`node_modules/${path}`, 'utf-8');
};

const init = async () => {
  const locales = {
    nl: {
      titleSeparator: ' - ',
    },
  };
  const locale = locales.nl;

  const PageTitle = ({ children, parts }: PropsWithChildren<{ parts?: string[] }>) => (
    <title>{Array.isArray(parts) ? parts.join(locale.titleSeparator) : children}</title>
  );

  const componentsToCss = new Map([
    [
      PageLayout,
      {
        publicURL: 'node_modules/@utrecht/page-layout-css/dist/index.min.css',
        private: await readImport('@utrecht/page-layout-css/dist/index.css'),
      },
    ],
    [
      PageHeader,
      {
        publicURL: 'node_modules/@utrecht/page-header-css/dist/index.min.css',
        private: await readImport('@utrecht/page-header-css/dist/index.css'),
      },
    ],
    [
      PageBody,
      {
        publicURL: 'node_modules/@utrecht/page-body-css/dist/index.min.css',
        private: await readImport('@utrecht/page-body-css/dist/index.css'),
      },
    ],
    [
      PageFooter,
      {
        publicURL: 'node_modules/@utrecht/page-footer-css/dist/index.min.css',
        private: await readImport('@utrecht/page-footer-css/dist/index.css'),
      },
    ],
    [
      Root,
      {
        publicURL: 'node_modules/@utrecht/root-css/dist/index.min.css',
        private: await readImport('@utrecht/root-css/dist/index.css'),
      },
    ],
    [
      Body,
      {
        publicURL: 'node_modules/@utrecht/body-css/dist/index.min.css',
        private: await readImport('@utrecht/body-css/dist/index.css'),
      },
    ],
    [
      Heading,
      {
        publicURL: 'node_modules/@utrecht/body-css/dist/index.min.css',
        private: await readImport('@utrecht/body-css/dist/index.css'),
      },
    ],
    [
      Paragraph,
      {
        publicURL: 'node_modules/@utrecht/paragraph-css/dist/index.min.css',
        private: await readImport('@utrecht/paragraph-css/dist/index.css'),
      },
    ],
  ]);

  const siteConfig = {
    encoding: 'utf-8',
    themeClassName: 'utrecht-theme',
    themeUrl: 'node_modules/@utrecht/design-tokens/dist/theme.css',
  };
  const pageConfig = {
    lang: 'en',
    dir: 'ltr',
    author: 'gemeente Utrecht',
    pageTitle: 'Home',
    description: 'Demo van web components',
  };

  const enableWebComponents = false;
  const ParagraphElement = ({ children }) => <utrecht-paragraph>{children}</utrecht-paragraph>;

  const AutoParagraph = ({ ...restProps }) =>
    enableWebComponents ? <ParagraphElement {...restProps} /> : <Paragraph {...restProps} />;

  const DeferStylesheet2 = ({ href }) => {
    const unknownProps = {
      ['onload']: "this.onload=null;this.rel='stylesheet'",
    };
    return (
      <>
        <link rel="preload" href={href} as="style" {...(unknownProps as any)} />
        <noscript>
          <link rel="stylesheet" href={href} />
        </noscript>
      </>
    );
  };
  const DeferStylesheet = ({ href }) => {
    return (
      <>
        <defer-stylesheet href={href} />
        <noscript>
          <link rel="stylesheet" href={href} />
        </noscript>
      </>
    );
  };

  const firstPaintComponents = new Set([Root, Body, PageLayout, PageHeader, PageBody, PageFooter]);

  const reactPage = (
    <Root lang={pageConfig.lang} dir={pageConfig.dir} className={siteConfig.themeClassName}>
      <head>
        <meta charSet={siteConfig.encoding} />
        <PageTitle parts={[pageConfig.pageTitle, pageConfig.author]} />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
customElements.define('defer-stylesheet', class DeferStylesheet extends HTMLElement {
  constructor() {
            super();
            const link = this.ownerDocument.createElement('link');
            link.href= this.getAttribute('href');
            link.rel="preload";
            link.as="style";
            link.onload = () => { link.onload = null; link.rel = "stylesheet" };
            this.ownerDocument.getElementsByTagName('head')[0].appendChild(link);
  }
});
        `,
          }}
        ></script>
        <style>{readFileSync(siteConfig.themeUrl, 'utf8')}</style>
        {siteConfig.themeUrl ? <DeferStylesheet href={siteConfig.themeUrl} /> : null}
        {pageConfig.description ? <meta name="description" content={pageConfig.description} /> : null}
        {Array.from(componentsToCss.entries())
          .filter(([comp]) => !firstPaintComponents.has(comp))
          .map(([, value], index) => (
            <DeferStylesheet key={index} href={value.publicURL} />
          ))}
        <style>
          {Array.from(componentsToCss.entries())
            .filter(([comp]) => firstPaintComponents.has(comp))
            .map(([, value]) => readFileSync(value.publicURL, 'utf-8'))
            .join('')}
        </style>
      </head>
      <Body>
        <PageLayout>
          <PageHeader>Header</PageHeader>
          <PageBody>
            <Heading level={1}>Hello, world!</Heading>
            <AutoParagraph>Lorem ipsum dolor</AutoParagraph>
          </PageBody>
          <PageFooter>Footer</PageFooter>
        </PageLayout>
      </Body>
    </Root>
  );

  console.log(reactPage);

  const addDoctype = (html) => `<!DOCTYPE html>\n${html}`;

  const html = addDoctype(renderToString(reactPage));
  writeFile('./server-side-rendering.html', html);
  const brotli = await compress(Buffer.from(html, 'utf8'));
  writeFile('./server-side-rendering.html.br', brotli);
};

init();
