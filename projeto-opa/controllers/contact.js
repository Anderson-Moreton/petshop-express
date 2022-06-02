const contactController = {
    contato: (req, res) => {
        const context = {}
        res.render('contact', context);
    }
}

module.exports = contactController;