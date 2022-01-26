const fs = require('fs-extra')

async function copyDocs (outputDir) {
  try {
    await fs.emptyDir(outputDir)
    await fs.copy('../../documentation/website', outputDir)
  } catch (err) {
    console.error(err)
  }
}

copyDocs('tmp')
