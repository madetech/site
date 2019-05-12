const express = require('express')
const next = require('next')
const reload = require('reload')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  reload(server).then((reloadReturned) => {
    server.get('/reload', (req, res) => {
      reloadReturned.reload()
      res.sendStatus(200)
    })

    server.get('*', (req, res) => {
      handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
})
