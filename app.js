const Word = require('./Word.js')
const prompt = require('prompt')

const words = ['gold', 'silver', 'apples', 'orange']

prompt.start()
prompt.get('guess', (err, result) => {
  console.log(result.name + " " + result.guess)
})

