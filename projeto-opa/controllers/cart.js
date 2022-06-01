const cartController = {
    carrinho: (req, res) => {
        const context = {}
        res.render('carrinho', context);
    }
}

module.exports = cartController;