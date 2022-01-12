const Sequelize = require("sequelize");
const connection = new Sequelize("heroku_8445d877bfb776b", "bb8d2f8be7e3b7", "bd91d143", {
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql"
});

module.exports = connection

//mysql://:@u/?reconnect=true