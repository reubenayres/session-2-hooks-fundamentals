import { Router } from "express";
import bodyParser from "body-parser";
import { Contact } from "../models/contact";

export default Router()
  .get("/", async (_req, res) => {
    const contacts = await Contact.findAll();
    res.json(contacts);
  })
  .post("/", bodyParser.json(), async (req, res, next) => {
    console.log("hey");
    const c = await Contact.create(req.body);
    res.json(c);
  })
  .put("/:id", bodyParser.json(), async (req, res, next) => {
    console.log("hey");
    const c = await Contact.findByPk(req.params.id);
    await c.update(req.body);
    res.json(c);
  });
