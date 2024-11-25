const {Router} = require('express');
const { pageInit, register } = require('../controllers/public');
const router = new Router();

router.get('/', pageInit);


module.exports = router;