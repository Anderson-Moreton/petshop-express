const menuController = {
    cardapio: (req, res) => {
        const context = {}
        res.render('cardapio', context);
    }
}

module.exports = menuController;