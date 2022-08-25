'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Categories", deps: []
 * createTable "Orders", deps: []
 * createTable "Users", deps: []
 * createTable "Products", deps: [Categories, Categories, Categories]
 * createTable "OrderItems", deps: [Orders, Orders, Products]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial-migration",
    "created": "2022-08-25T15:35:28.061Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Categories",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Orders",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "cliente": {
                    "type": Sequelize.STRING,
                    "field": "cliente"
                },
                "total": {
                    "type": Sequelize.FLOAT,
                    "field": "total"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email"
                },
                "birthday": {
                    "type": Sequelize.INTEGER,
                    "field": "birthday"
                },
                "cellphone": {
                    "type": Sequelize.INTEGER,
                    "field": "cellphone"
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password"
                },
                "cep": {
                    "type": Sequelize.INTEGER,
                    "field": "cep"
                },
                "addressNumber": {
                    "type": Sequelize.INTEGER,
                    "field": "addressNumber"
                },
                "addressComplement": {
                    "type": Sequelize.STRING,
                    "field": "addressComplement"
                },
                "address": {
                    "type": Sequelize.STRING,
                    "field": "address"
                },
                "city": {
                    "type": Sequelize.STRING,
                    "field": "city"
                },
                "state": {
                    "type": Sequelize.STRING,
                    "field": "state"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Products",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "Categories",
                        "key": "id"
                    },
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name"
                },
                "category": {
                    "type": Sequelize.INTEGER,
                    "field": "category",
                    "references": {
                        "model": "Categories",
                        "key": "id"
                    }
                },
                "price": {
                    "type": Sequelize.FLOAT,
                    "field": "price"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                },
                "categoryId": {
                    "type": Sequelize.INTEGER,
                    "field": "categoryId",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Categories",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "OrderItems",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "Orders",
                        "key": "id"
                    },
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "orderId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "allowNull": true,
                    "field": "orderId",
                    "references": {
                        "model": "Orders",
                        "key": "id"
                    }
                },
                "productId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "allowNull": true,
                    "field": "productId",
                    "references": {
                        "model": "Products",
                        "key": "id"
                    }
                },
                "quantity": {
                    "type": Sequelize.INTEGER,
                    "field": "quantity"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
