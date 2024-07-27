/* eslint-env node */
import axios from 'axios';
import dotenv from 'dotenv';
import fs from 'fs';
import postcss from 'postcss';
import postcssLogical from 'postcss-logical';
import { readFile, writeFile } from 'node:fs/promises';

const convertToPDF = async (htmlFile, cssFiles, tempFile, outputFile, API_KEY) => {
  try {
    // Read HTML and CSS files
    const html = await readFile(htmlFile, 'utf8');
    const css = Promise.all(cssFiles.map(async (path) => await readFile(path, 'utf8'))).join('\n');

    // Combine HTML and CSS
    const combinedHTML = `<!DOCTYPE html>
      <html lang="nl" dir="ltr">
        <head>
          <meta charset="utf-8" />
          <title>Hello world</title>
          <style>
@page {
  size: A4;
  margin: 2.54cm;
}
</style>
          <style>${css}</style>
          <style>
          .utrecht-textbox {
  }
</style>    
        </head>
        <body>${html}</body>
      </html>
    `;

    // DocRaptor API endpoint
    const apiUrl = 'https://docraptor.com/docs';

    // Request payload
    const payload = {
      test: true, // Set to false for production use
      document_content: combinedHTML,
      name: 'output.pdf',
      document_type: 'pdf',
      prince_options: {
        profile: 'PDF/UA-1',
      },
    };

    // Save the combined HTML
    await writeFile(tempFile, combinedHTML);
    return;
    // Make API request
    const response = await axios.post(apiUrl, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(API_KEY + ':').toString('base64')}`,
      },
      responseType: 'arraybuffer',
    });

    // Save the PDF
    await writeFile(outputFile, response.data);
    console.log(`PDF saved as ${outputFile}`);
  } catch (error) {
    console.error('Error converting to PDF:', error);
  }
};

const init = async () => {
  // Load environment variables
  dotenv.config();

  // DocRaptor API key
  const API_KEY = process.env.DOCRAPTOR_API_KEY;

  if (!API_KEY) {
    console.error('DocRaptor API key not found. Please set DOCRAPTOR_API_KEY in your .env file.');
    process.exit(1);
  }
  const css = await readFile('./styles.css', 'utf-8');
  let out = await postcss([
    postcssLogical({
      blockDirection: 'top-to-bottom',
      inlineDirection: 'left-to-right',
    }),
  ]).process(css /*, processOptions */);
  let compatCss = out.css.replace(/::backdrop/gi, '').replace(/@charset "UTF-8";/gi, '');
  await writeFile('./styles-compat.css', compatCss);

  // Usage
  const htmlFile = 'input.html';
  const cssFiles = [
    '../component-library-css/dist/prince-xml.css',
    '../../proprietary/design-tokens/dist/theme-prince-xml.css',
  ];
  const tempFile = 'temp.html';
  const outputFile = 'output.pdf';

  convertToPDF(htmlFile, cssFiles, tempFile, outputFile, API_KEY);
};

init();
