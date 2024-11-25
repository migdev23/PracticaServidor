const paginaInicio = (req,res) => {
    return res.render('private/pages/index');
};

const profile = (req, res) =>{
    return res.render('private/pages/profile');
};

module.exports = {paginaInicio,profile}