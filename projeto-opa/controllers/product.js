const fs = require('fs');
const path = require('path');
const { Op } = require("sequelize");
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
    getProductById: async (req, res) => {
        const productId = req.params.id;
        db.Product.findByPk(productId).then((result) => {
            if (result) {
                res.send(result);
            } else {
                res.send(`any product with id ${productId} found`)
            }
        }).catch((error) => {
            res.send(`any product with id ${productId} found`)
        })
    },
    getProductByName: (req, res) => {
        const productName = req.params.name.toLowerCase();
        db.Product.findAll({
            where: {
                name: {
                    [Op.substring]: productName
                }
            }
        }).then((result) => {
            if (result) {
                res.send(result);
            } else {
                res.send(`any product with name ${productName} found`)
            }
        }).catch((error) => {
            res.send(`any product with name ${productName} found`)
        })
    },
    getProductsByPriceRange: (req, res) => {
        const maxPrice = req.params.maxPrice;
        const minPrice = req.params.minPrice;
        db.Product.findAll({
            where: {
                price: {
                    [Op.between]: [minPrice, maxPrice]
                }
            }
        }).then((result) => {
            if (result) {
                res.send(result);
            } else {
                res.send(`any product with price between ${minPrice} and ${maxPrice} found`)
            }
        }).catch((error) => {
            res.send(`any product with price between ${minPrice} and ${maxPrice} found`)
        })
    },
    getProductsByCategory: (req, res) => {
        const category = req.params.category;
        db.Product.findAll({
            where: {
                category: {
                    [Op.eq]: category
                }
            }
        }).then((result) => {
            if (result) {
                res.send(result);
            } else {
                res.send('please fix the product category name and try again.')
            }
        }).catch((error) => {
            res.send('please fix the product category name and try again.')
        })
    },
    addProduct: (req, res) => {
        const productData = req.body;
        const parsedProductData = {
            ...productData,
            category: parseInt(productData.category),
            price: parseFloat(productData.price.replace(',', '.'))
        }

        db.Product.create(parsedProductData).then(() => {
            res.render('admin/addProduct');
        }).catch((error) => {
            res.send("An error ocurred when trying to add a new product: " + error);
        })
    },
    addProductView: (req, res) => {
        res.render('admin/addProduct')
    },
    deleteProduct: (req, res) => {
        const productId = req.body.productId;
        db.Product.destroy({
            where: {
                id: {
                    [Op.eq]: productId
                }
            }
        }).then((result) => {
            if (result) {
                res.render('admin/deleteProduct');
            } else {
                res.send('An error ocurred when trying to delete a product')
            }
        }).catch((error) => {
            res.send("An error ocurred when trying to delete a product: " + error);
        })
    },
    deleteProductView: (req, res) => {
        res.render('admin/deleteProduct')
    },

}

module.exports = productsController;