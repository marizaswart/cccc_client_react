const fs = require('fs')

const request = (url) => new promise((resolve, reject) => {
  const lastSlash = url.lastIndexOf('/')
  const plantID = url.substring(lastSlash + 1)

  fs.readFile(`./src/__mockData__/${plantID}.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    resolve({ entity: JSON.parse(data) })
  })
})

export default request
