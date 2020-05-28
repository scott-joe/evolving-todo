import config from './config'

export function generateId() {
  return Math.round(Math.random() * (9999999 - 1000000)) + 1000000;
}

export function log(msg, level = 'container', indentOverride) {
  if (config.debug) {
    const map = {
      container: { color: '#0bb100', indent: 0 },
      handler: { color: '#d0a301', indent: 1 },
      component: { color: '#a00000', indent: 2 },
      callback: { color: '0070b1', indent: 3 },
    }
    const logMetaData = map[level]
    logMetaData.indent = indentOverride || logMetaData.indent
    let spacer = ' '
    while (logMetaData.indent > 0) {
      spacer += '  '
      logMetaData.indent--
    }
    // console.dir() // output object
    // console.trace() // output call trace
    console.log(`%c${spacer}${msg} `, `background: ${logMetaData.color}; color:white`)
  }
}