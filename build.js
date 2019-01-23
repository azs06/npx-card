'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Md. Atiquzzaman Soikat'),
  handle: chalk.white('azs06'),
  work: chalk.white('Software Engineer at ButlerHospitality'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('soikat'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~azs06'),
  github: chalk.gray('https://github.com/') + chalk.green('azs06'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('md-atiquzzaman-soikat'),
  stackoverflow: chalk.gray('https://stackoverflow.com/users/') + chalk.blue('946131/azs06'),
  npx: chalk.red('npx') + ' ' + chalk.white('azs06'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelStackOverflow: chalk.white.bold('   StackOverflow:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const stackoverflowing = `${data.labelStackOverflow} ${data.stackoverflow}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               stackoverflowing + newline + 
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
