const generalController = {
    index: (req, res) => {
        const context = {}
        res.render('index', context);
    },
    cardapio: (req, res) => {
        const context = {}
        res.render('cardapio', context);
    },
    contato: (req, res) => {
        const context = {}
        res.render('contato', context);
    },
    quemsomos: (req, res) => {
        const context = {}
        res.render('quemsomos', context);
    },
    entre: (req, res) => {
        const context = {}
        res.render('entre', context);
    },
    cadastro: (req, res) => {
        const context = {}
        res.render('cadastro', context);
    },
    carrinho: (req, res) => {
        const context = {}
        res.render('carrinho', context);
    },
    pedido: (req, res) => {
        const context = {}
        res.render('pedido', context);
    }
}


module.exports = generalController;