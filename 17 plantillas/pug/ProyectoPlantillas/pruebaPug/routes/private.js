const {Router} = require('express');
const { pagePrivate } = require('../controllers/private');
const { autenticadoJWT } = require('../middlewares/jwt');
const router = new Router();

router.get('/', [autenticadoJWT], pagePrivate);

module.exports = router