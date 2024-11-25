const {Router} = require('express');
const { paginaInicio } = require('../controllers/public');
const router = new Router();

router.get('/', paginaInicio);

module.exports = router;