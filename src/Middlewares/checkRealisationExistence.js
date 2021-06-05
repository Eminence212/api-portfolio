const { getRealisation} = require("../Models/Realisations");

const RealisationProject = getRealisation();

const checkRealisationExistence = (req, res, next) => {

  const realisation = RealisationProject.find(
    (realisation) => realisation.id === req.params.id
  );

  if (!realisation) return res.status(404).json({ message: "Not found" });
  req.realisation = realisation;

  next();
};
module.exports = checkRealisationExistence;
