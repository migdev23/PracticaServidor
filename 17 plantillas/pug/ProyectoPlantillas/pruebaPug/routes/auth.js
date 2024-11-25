const { Router } = require('express');
const { registroBodyAtributos, passwordDiff, existeUser, duplicadoUsuario, loginBodyAtributos, passwordAutenticada } = require('../middlewares/auth');
const { register, login, logout } = require('../controllers/auth');
const { autenticadoJWT } = require('../middlewares/jwt');
const router = new Router();

router.post('/register', [
    registroBodyAtributos,
    passwordDiff,
    duplicadoUsuario
], register);

router.post('/login', [
    loginBodyAtributos,
    existeUser,
    passwordAutenticada
], login);

router.get('/logout', [
    autenticadoJWT
], logout);

module.exports = router;