/* eslint-env node */

const fs = require('fs-extra')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const INPUT_DIR = argv['input-dir']
const OUTPUT_DIR = argv['output-dir']

async function copyDir () {
  try {
    await fs.emptyDir(OUTPUT_DIR)
    await fs.copy(INPUT_DIR, OUTPUT_DIR)
  } catch (err) {
    console.error(err)
  }
}

copyDir()
