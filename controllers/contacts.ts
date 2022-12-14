import { Router } from "express";
import bodyParser from "body-parser";

type Contact = {
  fullName: string;
  title: string;
  organization: string;
  phone: string;
};

export default Router()
  .get("/", (_req, res) => {
    res.send("contacts");
  })
  .post("/", bodyParser.json(), (req, res) => {
    console.log("hey");
    res.json(req.body);
  });
