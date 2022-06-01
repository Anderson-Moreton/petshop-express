const whoController = {
    quemsomos: (req, res) => {
        const context = {}
        res.render('quemsomos', context);
    }
}

module.exports = whoController;