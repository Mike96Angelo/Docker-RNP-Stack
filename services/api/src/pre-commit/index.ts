#!/bin/node

import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'

execSync('git diff --cached --name-only --diff-filter=ACM', {
  encoding: 'utf8',
})
  .split('\n')
  .filter((p) => /.*\.tsx?$/.test(p))
  .forEach((filepath) => {
    const configPath = findPath(filepath, 'tslint.json')
    const projectPath = findPath(filepath, 'tsconfig.json')

    execSync(
      `npx tslint --config ${configPath} --project ${projectPath} ${filepath}`
    )
  })

const findPath = (filepath: string, file: string): string => {
  const d = path.dirname(filepath)
  const f = path.join(d, file)

  if (fs.existsSync(f)) {
    return f
  }

  if (d === process.cwd()) {
    throw new Error(`Could not find: '${file}'`)
  }

  return findPath(d, file)
}
