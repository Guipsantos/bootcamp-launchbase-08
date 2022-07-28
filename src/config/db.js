const { Pool } = require("pg")

module.exports = new Pool ({
    user: 'postgres',
    password: "gps1006",
    host: "localhost",
    port: 5432,
    database: "launchstoredb2"
})

