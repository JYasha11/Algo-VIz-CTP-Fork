const Sequelize = require("sequelize");
require("dotenv").config(); // requries dotenv

const db = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASS,
    {
        host: "localhost",
        dialect: "postgres",
    }
);


// const db = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });


module.exports = db;