import { spawn } from 'node:child_process'
import { EOL } from 'node:os'

function prefixStream(stream, prefix) {
  let buffer = ''
  stream.on('data', (chunk) => {
    buffer += chunk.toString()
    let lines = buffer.split(/\r?\n/)
    buffer = lines.pop() ?? ''
    for (const line of lines) {
      process.stdout.write(`${prefix} ${line}${EOL}`)
    }
  })
  stream.on('end', () => {
    if (buffer.length) process.stdout.write(`${prefix} ${buffer}${EOL}`)
  })
}

function run(name, command, args, cwd) {
  const child = spawn(command, args, {
    cwd,
    shell: true,
    env: { ...process.env, FORCE_COLOR: '1' }
  })
  prefixStream(child.stdout, `[${name}]`)
  prefixStream(child.stderr, `[${name}]`)
  child.on('exit', (code, signal) => {
    process.stdout.write(`[${name}] exited with ${signal ?? code}${EOL}`)
  })
  return child
}

const backend = run('backend', 'npm', ['run', 'start:dev', '--workspace', 'apps/backend'], '.')
const frontend = run('frontend', 'npm', ['run', 'dev', '--workspace', 'apps/frontend'], '.')

function shutdown() {
  backend.kill('SIGTERM')
  frontend.kill('SIGTERM')
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

