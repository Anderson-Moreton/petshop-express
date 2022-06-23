const fs = require('fs');
const path = require('path');
const productCategory = require('../data/productsCategories');
const productsDatabasePath = path.join(__dirname, '../data/productsDatabase.json');
const products = JSON.parse(fs.readFileSync(productsDatabasePath, 'utf-8'));
const db = require('../models')

const productDataParser = (newProductId, productData) => {
    return ({
        [newProductId]: {
            name: productData?.name || null,
            price: productData?.price || null,
            category: productData?.category || null,
        }
    })
}

const productsController = {
    getAllProducts: async (req, res) => {
        const allProducts = await db.Product.findAll()
        const context = { allProducts }
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
    },
    addProduct: (req, res) => {
        const productData = req.body;
        db.Product.create(productData).then((result) => {
            res.send("Success: " + result);
        }).catch((result) => {
            res.send("An error ocurred when trying to add a new product: " + result);
        })
    },
    deleteProduct: (req, res) => {
        const productId = req.params.id;
        try {
            delete products[productId];
            fs.writeFileSync(productsDatabasePath, JSON.stringify(products))
            res.send("product deleted with success.")
        } catch (error) {
            res.send("An error ocurred when trying to delete a product: " + error);
        }
    },

}

module.exports = productsController;