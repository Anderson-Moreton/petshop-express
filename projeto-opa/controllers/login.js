const loginController = {
    entrar: (req,res) => {
        const context = {}
        res.render('entrar', context);
    }
}

module.exports = loginController;