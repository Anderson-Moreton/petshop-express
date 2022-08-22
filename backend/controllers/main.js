const generalController = {
    home: (req, res) => {
        const context = {}
        res.render('index', context);
    }
}

module.exports = generalController;