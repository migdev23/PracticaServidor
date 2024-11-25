const {Router} = require('express');
const { paginaInicio, profile } = require('../controllers/private');
const router = new Router();

router.get('/', paginaInicio)

router.get('/profile', profile);

module.exports = router;