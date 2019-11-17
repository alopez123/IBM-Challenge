const Sequelize = require('sequelize');
const { sequelize } = require('../database/database');


const Adition = sequelize.define('backend', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    numberone: {
        type: Sequelize.INTEGER
    },
    numbertwo: {
        type: Sequelize.INTEGER
    },
    result: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false
    });

module.exports = backend;
