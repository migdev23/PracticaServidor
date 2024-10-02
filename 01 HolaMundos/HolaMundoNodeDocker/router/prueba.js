const {Router} = require('express')
const pruebaControllerGET = require('../controller/pruebaController')
const router = new Router()
router.get('/',[],pruebaControllerGET)
module.exports = router
