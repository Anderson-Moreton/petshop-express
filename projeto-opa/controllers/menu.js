const menuController = {
    cardapio: (req, res) => {
        const context = {}
        res.render('menu', context);
    }
}

module.exports = menuController;