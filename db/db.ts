const { Sequelize } = require("sequelize");

export const db = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

// sequelize
//   .authenticate()
//   .then(() => console.log("database connected"))
//   .catch((err: any) => {
//     console.log("could not connect to db");
//     console.log(err);
//   });
