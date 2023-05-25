// manejar archivos del sistema asincronicamente

const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, res) => {
  if (err) {
    console.log(err)
    return
  }

  const first = res
  readFile('./content/second.txt', 'utf8', (err, res) => {
    if (err) {
      console.log(err)
      return
    }

    const second = res
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done whit this task')
      }
    )
  })
})
console.log('starting next task')
// get the <Buffer> si utf8 its not provided
