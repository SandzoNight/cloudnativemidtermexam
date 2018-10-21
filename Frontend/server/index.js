require('dotenv').config()

const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const dev = process.env.NODE_ENV !== 'production'
const PORT = parseInt(process.env.PORT, 10) || 3000

const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())
  server.use(cookieParser())

  server.get('/', (req, res) => {
    return app.render(req, res, '/index')
  })
  server.get('/import', (req, res) => {
    const { slug } = req.params
    return app.render(req, res, '/importstudent', { slug })
  })


  server.get('*', (req, res) => {
    try {
      return handle(req, res)
    } catch (err) {
      console.log(err)
    }
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
