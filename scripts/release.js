import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import prompts from 'prompts'
import { execa } from 'execa'
import chalk from 'chalk'

const cwd = process.cwd()

const info = (...args) => console.log(chalk.yellow(...args))
const success = (...args) => console.log(chalk.green(...args))

let newVersion = ''

const runCommand = async (command, args, cwd = process.cwd()) =>
  await execa(command, args, { cwd, stdio: 'ignore' })

const questions = [
  {
    type: 'select',
    name: 'version',
    message: 'Select version type',
    choices: [
      { title: 'patch', value: 'patch' },
      { title: 'minor', value: 'minor' },
      { title: 'major', value: 'major' },
    ],
  },
]

function updateVersion(packageJsonPath, versionType) {
  const packageContentStr = readFileSync(packageJsonPath, { encoding: 'utf-8' })
  const { name, version, ...rest } = JSON.parse(packageContentStr)
  let [major, minor, patch] = version.split('.')
  if (versionType === 'major') {
    major = Number(major) + 1
    minor = 0
    patch = 0
  } else if (versionType === 'minor') {
    minor = Number(minor) + 1
    patch = 0
  } else {
    patch = Number(patch) + 1
  }

  if (!newVersion) newVersion = `${major}.${minor}.${patch}`

  const updateContentStr = JSON.stringify(
    { name, version: `${major}.${minor}.${patch}`, ...rest },
    null,
    2
  )
  writeFileSync(packageJsonPath, updateContentStr, { encoding: 'utf-8' })
}

async function handleGitOperation() {
  // push change file origin
  info('\n保存更改，推送远端中 ...')
  await runCommand('git', ['add', '-A'])
  await runCommand('git', ['commit', '-m', `release: v${newVersion}`])
  await runCommand('git', ['push'])
  success('\n推送更改远端完成')

  info('\n创建版本tag中 ...')
  await runCommand('git', ['tag', `v${newVersion}`])
  success(`\n版本tag创建完毕，版本号为: v${newVersion}`)
  info('\n推送tag远端中 ...')
  await runCommand('git', ['push', '--tags'])
  success('\ntag推送远端完成')
}

async function handlePublish(executePath, pkg) {
  info(`\n推送${pkg}到npm中...`)
  await runCommand('npm', ['publish', '--access', 'public'], executePath)
  success(`\n推送${pkg}到npm成功`)
}

async function main() {
  const { version } = await prompts(questions)

  if (!version) return

  const pkgs = readdirSync(path.resolve(cwd, 'packages'), { encoding: 'utf-8' })
  // update pkg version
  pkgs.forEach(pkg => {
    info(`\n正在更新 ${pkg}版本 ...`)
    updateVersion(path.resolve(cwd, 'packages', pkg, 'package.json'), version)
    success(`\n更新 ${pkg}版本完成`)
  })

  // update root package.json version
  updateVersion(path.resolve(cwd, 'package.json'), version)

  // handle git
  handleGitOperation().catch(err => console.log(err))

  // handle publish package to npm
  const publishquene = pkgs.map(pkg =>
    handlePublish(path.resolve(cwd, 'packages', pkg), pkg)
  )

  Promise.all(publishquene)
}

main().catch(err => console.log(err))
