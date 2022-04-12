require('dotenv').config()

const dbOptions = {
    // host: process.env.HOST,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port:process.env.PORT_MYSQL,
    database: process.env.DATABASE,
    debug: false,
};

module.exports = dbOptions;