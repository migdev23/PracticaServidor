const jwt = require('jsonwebtoken');

const verificarToken = (token) => {
    try {
        jwt.verify(token, process.env.SECRET_KEY);
        return true
    } catch (err) {
        return false
    }
}

const generarToken = (payload={}) => {
    const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
    return token
}

module.exports = {generarToken, verificarToken};