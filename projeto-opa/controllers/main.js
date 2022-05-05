const generalController = {
    index: (req, res) => {
        const context = {}
        res.render('index', context);
    }
}

module.exports = generalController;