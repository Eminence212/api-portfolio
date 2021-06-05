const express = require("express");
const RealisationControllers = require("../Controllers/RealisationControllers");
const { validateBody, checkRealisationExistence } = require("../Middlewares");
const RealisationRouter = express.Router();

RealisationRouter.get("/", RealisationControllers.getRealisations);

RealisationRouter.get(
  "/:id",
  checkRealisationExistence,
  RealisationControllers.getRealisationsById
);
RealisationRouter.post(
  "/add",
  validateBody,
  RealisationControllers.createRealisation
);
RealisationRouter.put(
  "/update/:id",
  [checkRealisationExistence, validateBody],
  RealisationControllers.updateRealisation
);
RealisationRouter.delete(
  "/delete/:id",
  checkRealisationExistence,
  RealisationControllers.deleteRealisation
);

module.exports = RealisationRouter;
