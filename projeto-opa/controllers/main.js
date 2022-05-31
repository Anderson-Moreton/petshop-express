const generalController = {
    index: (req, res) => {
        const context = {}
        res.render('index', context);
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
    carrinho: (req, res) => {
        const context = {}
        res.render('carrinho', context);
    }
}


module.exports = generalController;