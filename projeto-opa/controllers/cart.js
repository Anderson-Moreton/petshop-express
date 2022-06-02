const cartController = {
    carrinho: (req, res) => {
        const context = {}
        res.render('cart', context);
    }
}

module.exports = cartController;