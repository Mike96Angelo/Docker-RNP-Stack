#!/bin/node

const fs = require('fs')
const path = require('path')

function convertLine(line) {
  const trimedLine = line.trim()

  if (
    trimedLine === '' ||
    trimedLine.startsWith('#') ||
    trimedLine.startsWith('**/')
  ) {
    return trimedLine
  }

  if (trimedLine.startsWith('!/')) {
    return `!${trimedLine.slice(2)}`
  }

  if (trimedLine.startsWith('!')) {
    return `!**/${trimedLine.slice(1)}`
  }

  if (trimedLine.startsWith('/')) {
    return trimedLine.slice(1)
  }

  return `**/${trimedLine}`
}

function gitignoreToDockerignore(content) {
  return `# Git\n**/.git\n**/.gitignore\n**/.gitkeep\n\n${content
    .split('\n')
    .map(convertLine)
    .join('\n')}`
}

const [, , input = '.', output] = process.argv

const gitignoreFile = fs.readFileSync(path.join(input, '.gitignore'), {
  encoding: 'utf8',
})

const dockerignoreFile = gitignoreToDockerignore(gitignoreFile)

if (output !== undefined) {
  fs.writeFileSync(path.join(output, '.dockerignore'), dockerignoreFile, {
    encoding: 'utf8',
  })
} else {
  console.log(dockerignoreFile)
}
