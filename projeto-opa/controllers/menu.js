const menuController = {
    menu: (req, res) => {
        const context = {}
        res.render('menu', context);
    },
    burguer: (req, res) => {
        const context = {}
        res.render('burguer', context);
    },
    dog: (req, res) => {
        const context = {}
        res.render('dog', context);
    },
    combos: (req, res) => {
        const context = {}
        res.render('combos', context);
    },
    drinks: (req, res) => {
        const context = {}
        res.render('drinks', context);
    }
}

module.exports = menuController;