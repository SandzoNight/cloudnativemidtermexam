const Router = require('express').Router
const router = Router()
const authRoute = require('./api/login/routes')

router.get('/', (req, res) => {
  res.status(200).send({ status: '[Passport-2018] FRONTEND-API Interface is running!' })
})

module.exports = router
