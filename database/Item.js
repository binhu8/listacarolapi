const Sequelize = require("sequelize");
const connection = require("./connection");

const Item = connection.define("items", {
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    escolhido: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

Item.sync({force: false});
module.exports = Item;