console.group('testing script with nonce added via "script.nonce = xxx":')

const script = document.createElement('script')
script.nonce = 'rAnd0m'
script.type = 'text/javascript'
script.text = `console.log('I am script with nonce added via "script.nonce = xxx"')`
document.body.append(script)

console.groupEnd()

console.group('testing script without nonce to verify that we get CSP errors at all')

const script2 = document.createElement('script')
script2.type = 'text/javascript'
script2.text = `console.log('I am script without nonce')`
document.body.append(script2)

console.groupEnd()
