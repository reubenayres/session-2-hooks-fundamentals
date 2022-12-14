import { db } from "../db/db";

const { DataTypes } = require("sequelize");
export const Contact = db.define(
  "User",
  {
    // Model attributes are defined here
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // organization,
    // lastName: {
    // type: DataTypes.STRING
    // allowNull defaults to true
    // }
  },
  {
    // Other model options go here
  }
);
console.log("hi from contact");

Contact.sync().then(() => console.log("created user table (theoretically)"));

// `sequelize.define` also returns the model
console.log(Contact === db.models.Contact); // true
