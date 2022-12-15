import dotenv from "dotenv";
dotenv.config();
import express from "express";
import contactsRouter from "./controllers/contacts";
import organizationsRouter from "./controllers/organizations";

const app = express();
const PORT = process.env.PORT || 3000;

const { db } = require("./db/db");

app.use("/contacts", contactsRouter);
app.use("/organizations", organizationsRouter);

require("./models/associations");

app.get("/", (_req, res) => {
  res.send("Hello!");
});

app.listen(PORT, () => {
  console.log(`${new Date()}: Server running on ${PORT}`);
});
