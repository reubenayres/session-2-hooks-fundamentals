const { db } = require("./db/db");
import { Contact } from "./models/contact";
import { Organization } from "./models/organization";
// require("./models/associations");

Contact.belongsTo(Organization, {
  foreignKey: {
    name: "organizationId",
    allowNull: false,
  },
  as: "organization",
});

Organization.hasMany(Contact, {
  foreignKey: "organizationId",
});

async function seed() {
  const { dataValues: spantree } = await Organization.create({
    name: "Spantree",
  });
  const { dataValues: spiderrock } = await Organization.create({
    name: "SpiderRock",
  });
  const reuben = await Contact.create({
    displayName: "Reuben Ayres",
    email: "reuben@spantree.net",
    title: "Software Engineer",
    organizationId: spantree.id,
  });
  const peter = await Contact.create({
    displayName: "Peter Murphy",
    email: "peter@spantree.net",
    title: "Senior Software Engineer",
    organizationId: spantree.id,
  });
  const jon = await Contact.create({
    displayName: "Jon Dugan",
    email: "jdugan@spantree.net",
    title: "Lead Consultant",
    organizationId: spantree.id,
  });
  const sean = await Contact.create({
    displayName: "Sean Lyons",
    email: "sean.lyons@spiderrock.net",
    title: "Lead Software Engineer",
    organizationId: spiderrock.id,
  });
  const alexei = await Contact.create({
    displayName: "Alexei Otvcharov",
    email: "alexei.otvcharov@spiderrock.net",
    title: "Software Engineer",
    organizationId: spiderrock.id,
  });
  const james = await Contact.create({
    displayName: "James Young",
    email: "james.young@spiderrock.net",
    title: "Software Engineer",
    organizationId: spiderrock.id,
  });
}

db.sync().then(() => {
  console.log("db should be set up now. seeding...");
  seed().then(() => console.log("data should be there"));
});
