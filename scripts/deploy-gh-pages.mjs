import { cp, mkdtemp, rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..')
const distDir = path.join(repoRoot, 'dist')
const tempPrefix = path.join(os.tmpdir(), 'dissidiawiki-deploy-')

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    ...options
  })

  if (result.status !== 0) {
    const joined = [command, ...args].join(' ')
    throw new Error(`Command failed: ${joined}`)
  }
}

function capture(command, args) {
  const result = spawnSync(command, args, {
    cwd: repoRoot,
    encoding: 'utf8'
  })

  if (result.status !== 0) {
    const joined = [command, ...args].join(' ')
    throw new Error(`Command failed: ${joined}`)
  }

  return result.stdout.trim()
}

function runNpm(args) {
  if (process.platform === 'win32') {
    run('cmd.exe', ['/d', '/s', '/c', `npm.cmd ${args.join(' ')}`])
    return
  }

  run('npm', args)
}

let tempDir

try {
  const remoteUrl = capture('git', ['remote', 'get-url', 'origin'])
  const gitUserName = capture('git', ['config', '--get', 'user.name']) || 'GitHub Pages Deploy'
  const gitUserEmail = capture('git', ['config', '--get', 'user.email']) || 'deploy@example.com'

  runNpm(['run', 'build'])

  tempDir = await mkdtemp(tempPrefix)
  await cp(distDir, tempDir, { recursive: true })

  run('git', ['init'], { cwd: tempDir })
  run('git', ['checkout', '-b', 'gh-pages'], { cwd: tempDir })
  run('git', ['add', '-A'], { cwd: tempDir })
  run('git', ['-c', `user.name=${gitUserName}`, '-c', `user.email=${gitUserEmail}`, 'commit', '-m', 'Deploy GitHub Pages'], { cwd: tempDir })
  run('git', ['remote', 'add', 'origin', remoteUrl], { cwd: tempDir })
  run('git', ['push', '--force', 'origin', 'gh-pages'], { cwd: tempDir })
} finally {
  if (tempDir) {
    await rm(tempDir, { recursive: true, force: true })
  }
}
