import { Model } from "sequelize";
import { db } from "../db/db";
import { Contact } from "./contact";
const { DataTypes } = require("sequelize");

class Organization extends Model {}

Organization.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Organization",
  }
);

console.log("organization");

// Organization.sync().then(() => console.log("created org table (theoretically)"));

export { Organization };
