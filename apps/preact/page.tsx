/* eslint-disable react/react-in-jsx-scope */
import { Body } from '@utrecht/body-react/dist/index.mjs';
import {
  Button,
  Document,
  Heading,
  Link,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react';
import { PageBody } from '@utrecht/page-body-react/dist/index.mjs';
import { PageFooter } from '@utrecht/page-footer-react/dist/index.mjs';
import { PageHeader } from '@utrecht/page-header-react/dist/index.mjs';
import { PageLayout } from '@utrecht/page-layout-react/dist/index.mjs';
import { Root } from '@utrecht/root-react/dist/index.mjs';
import cssnano from 'cssnano';
import { readFileSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import postcss from 'postcss';
import { PropsWithChildren } from 'react';
import { renderToString } from 'react-dom/server';
import UglifyJS from 'uglify-js';
import { compress } from 'wasm-brotli';

const readImport = (path) => {
  return readFile(`node_modules/${path}`, 'utf-8');
};

const minifyCss = async (code) => (await postcss([cssnano({ preset: ['default'] })]).process(code)).css;

const minifyJs = (code) => UglifyJS.minify(code).code;

const deferStylesheetScript = `
customElements.define('defer-stylesheet', class DeferStylesheet extends HTMLElement {
  constructor() {
            super();
            const link = this.ownerDocument.createElement('link');
            const href = this.getAttribute('href');
            if (href) {
            link.href= this.getAttribute('href');
            link.rel="preload";
            link.as="style";
            link.onload = () => { link.onload = null; link.rel = "stylesheet" };
            this.ownerDocument.getElementsByTagName('head')[0].appendChild(link);
}
  }
});`;

export const getComponents = () => ({
  Body,
  Heading,
  Paragraph,
  PageBody,
  PageFooter,
  PageHeader,
  PageLayout,
  Root,
  Link,
  UnorderedList,
  UnorderedListItem,
});

export const init = async ({ siteConfig, pageConfig, buildConfig, render, renderHead }) => {
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
    [
      UnorderedList,
      {
        publicURL: 'node_modules/@utrecht/unordered-list-css/dist/index.min.css',
        private: await readImport('@utrecht/unordered-list-css/dist/index.css'),
      },
    ],
    [
      Link,
      {
        publicURL: 'node_modules/@utrecht/link-css/dist/index.min.css',
        private: await readImport('@utrecht/link-css/dist/index.css'),
      },
    ],
    [
      Button,
      {
        publicURL: 'node_modules/@utrecht/button-css/dist/index.min.css',
        private: await readImport('@utrecht/button-css/dist/index.css'),
      },
    ],
    [
      Document,
      {
        publicURL: 'node_modules/@utrecht/document-css/dist/index.min.css',
        private: await readImport('@utrecht/document-css/dist/index.css'),
      },
    ],
  ]);

  const enableWebComponents = false;
  const ParagraphElement = ({ children }) => <utrecht-paragraph>{children}</utrecht-paragraph>;

  const AutoParagraph = ({ ...restProps }) =>
    enableWebComponents ? <ParagraphElement {...restProps} /> : <Paragraph {...restProps} />;

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

  const MinifiedScript = ({ children, ...restProps }) => (
    <script
      {...restProps}
      dangerouslySetInnerHTML={{
        __html: minifyJs(String(children)),
      }}
    />
  );

  const firstPaintComponents = new Set([
    Root,
    Body,
    PageLayout,
    PageHeader,
    PageBody,
    PageFooter,
    Paragraph,
    UnorderedList,
    Link,
    Button,
  ]);

  const reactPage = (
    <Root lang={pageConfig.lang} dir={pageConfig.dir} className={siteConfig.themeClassName}>
      <head>
        <meta charSet={siteConfig.encoding} />
        <PageTitle parts={[pageConfig.pageTitle, pageConfig.author]} />
        {pageConfig.description ? <meta name="description" content={pageConfig.description} /> : null}
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
        <MinifiedScript>{deferStylesheetScript}</MinifiedScript>
        <style nonce={buildConfig.nonce}>{await minifyCss(readFileSync(siteConfig.themeUrl, 'utf8'))}</style>
        {renderHead ? renderHead() : null}
        {siteConfig.themeUrl ? <DeferStylesheet href={siteConfig.themeUrl} /> : null}
        {Array.from(componentsToCss.entries())
          .filter(([comp]) => !firstPaintComponents.has(comp))
          .map(([, value], index) => (
            <DeferStylesheet key={index} href={value.publicURL} />
          ))}
        <style nonce={buildConfig.nonce}>
          {Array.from(componentsToCss.entries())
            .filter(([comp]) => firstPaintComponents.has(comp))
            .map(([, value]) => readFileSync(value.publicURL, 'utf-8'))
            .join('')}
        </style>
      </head>
      <Body>
        <Document>{render()}</Document>
      </Body>
    </Root>
  );

  const addDoctype = (html) => `<!DOCTYPE html>\n${html}`;

  const html = addDoctype(renderToString(reactPage));
  writeFile(buildConfig.outputFile, html);

  if (buildConfig.brotli) {
    const brotli = await compress(Buffer.from(html, 'utf8'));
    writeFile(`${buildConfig.outputFile}.br`, brotli);
  }
};

// const siteConfig = {
//   encoding: 'utf-8',
//   themeClassName: 'utrecht-theme',
//   themeUrl: 'node_modules/@utrecht/design-tokens/dist/theme.css',
// };
// const pageConfig = {
//   lang: 'en',
//   dir: 'ltr',
//   author: 'gemeente Utrecht',
//   pageTitle: 'Home',
//   description: 'Demo van web components',
// };

// const buildConfig = {
//   outputFile: './server-side-rendering.html',
//   brotli: true,
// };

// init({
//   siteConfig,
//   pageConfig,
//   buildConfig,
//   render: () => (
//     <PageLayout>
//       <PageHeader>Header</PageHeader>
//       <PageBody>
//         <Heading level={1}>Hello, world!</Heading>
//         <Paragraph>Lorem ipsum dolor</Paragraph>
//       </PageBody>
//       <PageFooter>Footer</PageFooter>
//     </PageLayout>
//   ),
// });
