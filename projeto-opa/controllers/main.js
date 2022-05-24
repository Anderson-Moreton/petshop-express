const generalController = {
    index: (req, res) => {
        const context = {}
        res.render('index', context);
    }
}

const menuController = {
    cardapio: (req, res) => {
        const context = {}
        res.render('cardapio', context);
    }
}

const contactController = {
    contato: (req, res) => {
        const context = {}
        res.render('contato', context);
    }
}

const whoController = {
    quemsomos: (req, res) => {
        const context = {}
        res.render('quemsomos', context);
    }
}

const loginController = {
    entrar: (req,res) => {
        const context = {}
        res.render('entrar', context);
    }
}

const cartController = {
    carrinho: (req, res) => {
        const context = {}
        res.render('carrinho', context);
    }
}

const productController = {
    admProduct: (req, res) => {
        const context = {}
        res.send('admProduct', context);
    }
}

const stockController = {
    admStock: (req, res) => {
        const context = {}
        res.send('admStock', context);
    }
}

module.exports = generalController;
module.exports = menuController;
module.exports = contactController;
module.exports = whoController;
module.exports = loginController;
module.exports = cartController;
module.exports = productController;
module.exports = stockController;

// const generalController = {
//     index: (req, res) => {
//         const context = {}
//         res.render('index', context);
//     },
//     cardapio: (req, res) => {
//         const context = {}
//         res.render('cardapio', context);
//     },
//     contato: (req, res) => {
//         const context = {}
//         res.render('contato', context);
//     },
//     quemsomos: (req, res) => {
//         const context = {}
//         res.render('quemsomos', context);
//     },
//     entre: (req, res) => {
//         const context = {}
//         res.render('entre', context);
//     },
//     carrinho: (req, res) => {
//         const context = {}
//         res.render('carrinho', context);
//     }, 

// }


// module.exports = generalController;