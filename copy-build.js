const fs = require('fs-extra')

async function copyBuild (inputDir, outputDir) {
  try {
    await fs.ensureDir(outputDir)
    await fs.copy(inputDir, outputDir)
  } catch (err) {
    console.error(err)
  }
}

copyBuild('packages/docusaurus/build', 'dist')
copyBuild('packages/storybook/dist', 'dist/storybook')
