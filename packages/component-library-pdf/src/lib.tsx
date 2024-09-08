/* eslint-env node */
import { Document } from '@utrecht/component-library-react/src/index';
import { exec, execFile } from 'node:child_process';
import { createHmac } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import { promisify } from 'node:util';
import React, { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { renderToString } from 'react-dom/server';

const LOG_VERBOSE = false;
const promiseExec = promisify(exec);
const promiseExecFile = promisify(execFile);

export const PageTitle = ({ children, website = '' }: PropsWithChildren<{ website?: string }>) => {
  return (
    <title>
      {children}
      {website ? ` - ${website}` : null}
    </title>
  );
};

/**
 * Replace the uniquely generated File ID property with a deterministic ID.
 *
 * There is a feature request for Prince XML to have this as built-in functionality:
 *
 * Deterministic output: a way to specify the PDF File Identifier (/ID) property
 * https://www.princexml.com/forum/topic/4931/deterministic-output-a-way-to-specify-the-pdf-file?p=1#24826
 */
const replacePdfId = (pdfBuffer: Buffer, newFileID: string) => {
  // Generated with Claude 3.5
  // Convert search patterns to buffers
  const idStartPattern = Buffer.from('/ID [<');
  const idEndPattern = Buffer.from('>]');
  const newFileIDBuffer = Buffer.from(newFileID + '> <' + newFileID);

  let startSearchIndex = 0;

  while (startSearchIndex < pdfBuffer.length) {
    // Find the start of the next File ID
    let idStartIndex = pdfBuffer.indexOf(idStartPattern, startSearchIndex);
    if (idStartIndex === -1) break; // No more File IDs found

    idStartIndex += idStartPattern.length;

    // Find the end of this File ID
    let idEndIndex = pdfBuffer.indexOf(idEndPattern, idStartIndex);
    if (idEndIndex === -1) {
      throw new Error('Invalid File ID format in the PDF');
    }

    // Check if the new File ID fits in the existing space
    const existingIDLength = idEndIndex - idStartIndex;
    if (newFileIDBuffer.length !== existingIDLength) {
      throw new Error(
        `New File ID length (${newFileIDBuffer.length}) does not match the existing one (${existingIDLength})`,
      );
    }

    // Replace the existing File ID with the new one
    newFileIDBuffer.copy(pdfBuffer, idStartIndex);

    startSearchIndex = idEndIndex + idEndPattern.length;
  }
  return pdfBuffer;
};

interface PdfPageProps extends HTMLAttributes<HTMLHtmlElement> {
  head?: ReactNode;
  title: string;
}

export const PdfPage = ({ children, head, title, ...restProps }: PropsWithChildren<PdfPageProps>) => {
  return (
    <html {...restProps}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <style>{`@page { size: A4; margin: 2.54cm; }`}</style>
        {head}
      </head>
      <body>
        <Document>{children}</Document>
      </body>
    </html>
  );
};

const execPrince = async (
  inputFile: string,
  outputFile: string,
  logFile?: string,
  fileId?: string,
  pngFile?: string,
) => {
  const file = 'node_modules/prince/prince/lib/prince/bin/prince';
  const args = [
    "--pdf-profile 'PDF/UA-1'",
    '--no-local-files',
    '--no-network',
    ...(pngFile ? ['--raster-output', pngFile] : []),
    '--output',
    outputFile,
    inputFile,
  ];
  const command = [file, ...args].join(' ');
  const { stderr } = await promiseExec(command);

  if (fileId) {
    const pdf = await readFile(outputFile);
    await writeFile(outputFile, replacePdfId(pdf, fileId));
  }

  if (logFile) {
    await writeFile(logFile, stderr, { encoding: 'utf8' });
  }
};

const addDoctype = (html: string): string => `<!DOCTYPE html>\n${html}`;
const themeCss = readFile('node_modules/@utrecht/design-tokens/dist/theme-prince-xml.css', 'utf-8');
const componentLibraryCss = readFile('node_modules/@utrecht/component-library-css/dist/prince-xml.css', 'utf-8');

const sha256hash = (str: Buffer): string => {
  const hmac = createHmac('sha256', str);
  return hmac.digest('hex');
};

export const renderPdf = async ({
  id,
  lang,
  render: RenderExample,
}: {
  id: string;
  lang?: string;
  render: () => ReactNode;
}): Promise<{ sha256: string; pdf: Buffer }> => {
  const html = addDoctype(
    renderToString(
      <PdfPage
        title={id}
        lang={lang || 'en'}
        className="utrecht-theme"
        head={
          <>
            <style dangerouslySetInnerHTML={{ __html: await themeCss }}></style>
            <style dangerouslySetInnerHTML={{ __html: await componentLibraryCss }}></style>
          </>
        }
      >
        <RenderExample></RenderExample>
      </PdfPage>,
    ),
  );

  const base = cwd();
  const outputDir = `${base}/tmp/`;
  const htmlPath = resolve(outputDir, `${id}.html`);
  const pdfPath = resolve(outputDir, `${id}.pdf`);
  const logPath = resolve(outputDir, `${id}.log`);
  const pngPath = resolve(outputDir, `${id}-%d.png`);
  const hashPath = resolve(outputDir, `${id}.pdf.sha256`);

  await mkdir(outputDir, { recursive: true });

  await writeFile(htmlPath, html);
  await execPrince(htmlPath, pdfPath, logPath, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', pngPath);
  const pdfFile = await readFile(pdfPath);
  const sha256 = sha256hash(pdfFile);
  await writeFile(hashPath, sha256);

  if (LOG_VERBOSE) {
    console.log(htmlPath);
    console.log(pdfPath);
    console.log(logPath);
    console.log(hashPath);
  }

  return {
    sha256,
    pdf: pdfFile,
  };
};
