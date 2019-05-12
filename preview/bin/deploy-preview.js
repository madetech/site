require('dotenv').config()
const fs = require('fs')
const request = require('request')
const tar = require('tar')
const execSync = require('child_process').execSync
const appFiles = [
  'data',
  'gatsby',
  'pages',
  'next.config.js',
  'package.json',
  'package-lock.json',
  'server.js'
]

function herokuRequest(path, body) {
  return {
    url: `https://api.heroku.com/apps/${process.env.HEROKU_APP_NAME}/${path}`,
    headers: {
      'Accept': 'application/vnd.heroku+json; version=3',
      'Authorization': `Bearer ${process.env.HEROKU_TOKEN}`,
    },
    body
  }
}

function ensureSuccess (err, res) {
  if (err) throw err
  if (res.statusCode !== 201) {
    console.error(res)
    throw res.statusCode
  }
}

console.log('Creating source on Heroku...')
request.post(herokuRequest('sources'), (err, res, body) => {
  ensureSuccess(err, res)

  const getUrl = JSON.parse(body).source_blob.get_url
  const putUrl = JSON.parse(body).source_blob.put_url

  console.log('Creating archive.tgz...')
  tar.create({ gzip: true, file: 'archive.tgz', sync: true }, appFiles)

  console.log('Uploading archive.tgz...')
  request.put({ url: putUrl, body: fs.readFileSync('archive.tgz') }, (err, res, body) => {
    console.log('Building on Heroku...')
    request.post(herokuRequest('builds', JSON.stringify({ source_blob: { url: getUrl } })), (err, res, body) => {
      ensureSuccess(err, res)
      console.log('done')
    })
  })
})
