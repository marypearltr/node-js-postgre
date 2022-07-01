const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

sequelize = new Sequelize(dbConfig.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// const sequelize = new Sequelize(
//   dbConfig.db,
//   dbConfig.username,
//   dbConfig.password,
//   {
//     host: dbConfig.host,
//     dialect: dbConfig.dialect,
//     ssl: true,

//     pool: {
//       max: dbConfig.pool.max,
//       min: dbConfig.pool.min,
//       acquire: dbConfig.pool.acquire,
//       idle: dbConfig.pool.idle,
//     },
//   }
// );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;
