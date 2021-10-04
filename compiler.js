const compiler = require('vue-template-compiler')

const template = `
<div id="test">
<div>
  <p>This is my vue render test</p>
</div>
<p>my name is {{myName}}</p>
</div>`

const result = compiler.compile(template)

console.log('result', result)