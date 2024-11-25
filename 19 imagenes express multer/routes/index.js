const {Router} = require('express');
const indexController = require('../controllers/indexControllers');
const router = new Router();

router.get('/', indexController);

module.exports = router;