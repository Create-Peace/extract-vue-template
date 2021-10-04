const compiler = require('vue-template-compiler')

const fs = require('fs')

const vFileContent = fs.readFileSync('./test.vue').toString()
console.log(vFileContent)
const parseRes = compiler.parseComponent(vFileContent)

console.log(parseRes)

const compilerResult = compiler.compile(parseRes.template.content)

console.log('result', compilerResult.ast)