import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import postcss from 'postcss';
import * as sass from 'sass';
import { mergeLicenseComments } from './remove-duplicate-license.mjs';
import { removeComments } from './remove-comments.mjs';
import cssnano from 'cssnano';
import { existsSync } from 'node:fs';

const webpackStyleImporter = {
  findFileUrl(url) {
    // Handle ~ imports
    if (url.startsWith('~')) {
      const normalizedUrl = url.slice(1); // Remove the ~ prefix
      try {
        // Resolve from node_modules
        const resolvedPath = path.resolve('node_modules', normalizedUrl);
        return new URL(`file://${resolvedPath}`);
      } catch (error) {
        console.warn(`Warning: Could not resolve ${url}`);
        return null;
      }
    }
    // Let Sass handle regular imports
    return null;
  },
};

const buildStyles = async (config) => {
  // Optional files exist only in some packages.
  // Continue without action when the input file does not exist.
  if (config.optional && !existsSync(config.inputFile)) {
    return;
  }

  try {
    // Ensure output directory exists
    const outputDir = path.dirname(config.outputFile);
    await mkdir(outputDir, { recursive: true });

    // Compile SCSS to CSS
    const sassResult = sass.compile(config.inputFile, {
      sourceMap: config.sourceMap,
      sourceMapIncludeSources: true,
      style: 'expanded',
      loadPaths: ['node_modules'],
      importers: [webpackStyleImporter],
    });

    // Setup PostCSS plugins
    const plugins = [
      // discardDuplicates(),
      mergeLicenseComments(),
      removeComments({
        keepLicense: true,
      }),
    ];

    // Add minification in production
    if (config.minify) {
      plugins.push(
        cssnano({
          preset: ['default'],
        }),
      );
    }

    // Process with PostCSS
    const postcssResult = await postcss(plugins).process(sassResult.css, {
      from: config.inputFile,
      to: config.outputFile,
      map: config.sourceMap ? { inline: false } : false,
    });

    let result = postcssResult.css;

    if (config.esm) {
      result = `export default ${JSON.stringify(result)};\n`;
    }
    if (config.dts) {
      await writeFile(config.dts, 'declare const css: string;\nexport default css;\n');
    }

    // Write file
    await writeFile(config.outputFile, result);

    // Write source map if enabled
    if (config.sourceMap && postcssResult.map) {
      await writeFile(`${config.outputFile}.map`, postcssResult.map.toString());
    }

    console.log(`✨ Styles built successfully to ${config.outputFile}`);
  } catch (error) {
    console.error('🔥 Error building styles:', error);
    process.exit(1);
  }
};

const buildTokens = async ({ inputFile, outputFile }) => {
  // Ensure output directory exists
  const outputDir = path.dirname(outputFile);
  await mkdir(outputDir, { recursive: true });

  const json = JSON.parse(await readFile(inputFile, 'utf-8'));

  await writeFile(outputFile, `export default ${JSON.stringify(json, null, 2)};\n`);

  await writeFile(
    outputFile.replace('.mjs', '.d.mts'),
    `
declare const tokens: any;

export default tokens;
`,
  );
};

buildStyles({
  inputFile: 'src/index.scss',
  outputFile: 'dist/index.css',
  sourceMap: process.env.NODE_ENV === 'development',
  minify: false,
});

buildStyles({
  inputFile: 'src/index.scss',
  outputFile: 'dist/index.min.css',
  sourceMap: process.env.NODE_ENV === 'development',
  minify: true,
});

buildStyles({
  inputFile: 'src/index.scss',
  outputFile: 'dist/index.mjs',
  sourceMap: false,
  minify: true,
  esm: true,
  dts: 'dist/index.d.mts',
});

buildStyles({
  inputFile: 'src/html/index.scss',
  outputFile: 'dist/html/index.css',
  sourceMap: process.env.NODE_ENV === 'development',
  minify: false,
  optional: true,
});

buildStyles({
  inputFile: 'src/html/index.scss',
  outputFile: 'dist/html/index.min.css',
  sourceMap: process.env.NODE_ENV === 'development',
  minify: true,
  optional: true,
});

buildStyles({
  inputFile: 'src/html/index.scss',
  outputFile: 'dist/html/index.mjs',
  sourceMap: false,
  minify: true,
  esm: true,
  dts: 'dist/html/index.d.mts',
  optional: true,
});

buildTokens({
  inputFile: 'src/tokens.json',
  outputFile: 'dist/tokens.mjs',
});
