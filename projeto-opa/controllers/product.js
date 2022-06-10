const fs = require('fs');
const path = require('path');
const productCategory = require('../data/productsCategories');
const productsDatabasePath = path.join(__dirname, '../data/productsDatabase.json');
const products = JSON.parse(fs.readFileSync(productsDatabasePath, 'utf-8'));

const productsController = {
    getAllProducts: (req, res) => {
        const context = { products }
        res.send(context);
    },
    getProductById: (req, res) => {
        const productId = req.params.id;
        const context = products[productId] || `any product with id ${productId} found`;
        res.send(context);
    },
    getProductByName: (req, res) => {
        const productName = req.params.name.toLowerCase();
        const context = Object.values(products).filter(product => product.name?.toLowerCase().includes(productName));
        res.send(context);
    },
    getProductsByPriceRange: (req, res) => {
        const maxPrice = req.params.maxPrice;
        const minPrice = req.params.minPrice;
        const context = Object.values(products).filter(product => product.price < maxPrice && product.price > minPrice);
        res.send(context);
    },
    getProductsByCategory: (req, res) => {
        const category = req.params.category;
        if (productCategory[category]) {
            const context = Object.values(products).filter(product => product.category === category);
            res.send(context);
        } else {
            res.send('please fix the product category name and try again.')
        }
    }
}

module.exports = productsController;