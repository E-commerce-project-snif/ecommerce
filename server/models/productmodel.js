const sequelize = require('../database/index'); // Adjust the path to your Sequelize instance
const {  DataTypes } = require('sequelize');

// Define the Product model
const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    images: {
        type: DataTypes.JSON, // You can use JSON to store an array of image URLs or paths
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true // Default to true if not specified
    },
    favoris: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // Default to 0 if not specified
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Ensure that each product has an associated seller
        references: {
            model: 'users', // The name of the User model or table
            key: 'id'
        }
    }
}, {
    // Model options
    tableName: 'products',
    timestamps: true // Sequelize will handle createdAt and updatedAt fields automatically
});


// Export the Product model
module.exports = Product;