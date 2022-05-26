const contactController = {
    contato: (req, res) => {
        const context = {}
        res.render('contato', context);
    }
}

module.exports = contactController;