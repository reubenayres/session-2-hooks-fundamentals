import { db } from "../db/db";
import { Contact } from "./contact";
import { Organization } from "./organization";

Contact.belongsTo(Organization, {
  foreignKey: {
    name: "organizationId",
    allowNull: false,
  },
  as: "organization",
});

Organization.hasMany(Contact, {
  foreignKey: {
    name: "organizationId",
  },
  as: "employees",
});

db.sync().then(() => console.log("db should be set up now"));

console.log("association");
