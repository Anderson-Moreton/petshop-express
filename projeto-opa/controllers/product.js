const productController = {
    admproduct: (req, res) => {
        const context = {}
        res.send('admproduct', context);
    }
}

module.exports = productController;