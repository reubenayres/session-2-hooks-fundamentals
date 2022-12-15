import { Model } from "sequelize";
import { db } from "../db/db";
import { Organization } from "./organization";
const { DataTypes } = require("sequelize");

class Contact extends Model {}

Contact.init(
  {
    // Model attributes are defined here
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Contact",
  }
);

console.log("contact");
// Contact.sync().then(() => console.log("created user table (theoretically)"));

export { Contact };
