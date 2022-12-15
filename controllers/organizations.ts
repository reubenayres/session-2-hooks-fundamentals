import { Router } from "express";
import bodyParser from "body-parser";
import { Organization } from "../models/organization";

export default Router()
  .get("/", async (_req, res, next) => {
    try {
      const organizations = await Organization.findAll({ include: "employees" });
      res.json(organizations);
    } catch (err) {
      res.status(400).json({
        message: `Error getting contacts`,
        error: err,
      });
      next(err);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const c = await Organization.findByPk(req.params.id, { include: "employees" });
      res.json(c);
    } catch (err) {
      res.status(400).json({
        message: `Error getting contact with id ${req.params.id}`,
        error: err,
      });
      next(err);
    }
  })
  .post("/", bodyParser.json(), async (req, res, next) => {
    try {
      const c = await Organization.create(req.body);
      res.json(c);
    } catch (err) {
      res.status(400).json(err);
      next(err);
    }
  })
  .put("/:id", bodyParser.json(), async (req, res, next) => {
    try {
      const c = await Organization.findByPk(req.params.id);
      if (!c) res.status(404).json({ message: `Organization with id ${req.params.id} not found.` });
      else {
        await c.update(req.body);
        res.json(c);
      }
    } catch (err) {
      res.status(400).json(err);
      next(err);
    }
  })
  .delete("/:id", async (req, res, next) => {
    try {
      const result = await Organization.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (result) res.json({ message: `Deleted organization with ID ${req.params.id}` });
      else res.status(400).json({ message: `There was no user with ID ${req.params.id}` });
    } catch (err) {
      res.status(400).json(err);
      next(err);
    }
  });
// .delete();
