exports.PaginaInicial = (req, res) =>{
    res.render('index');
};
exports.Post = (req, res,next) =>{
    res.send(`Bem vindo ao sistema, ${req.body.pessoa}`);
    next();
};