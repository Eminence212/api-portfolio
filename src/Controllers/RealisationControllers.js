const crypto = require("crypto");

const { getRealisation, setRealisation } = require("../Models/Realisations");

const RealisationsProject = getRealisation();

//Affichage de toutes les réalisations
function getRealisations(req, res) {
  res.send(RealisationsProject);
}
//Affichage d\'une réalisation par son ID
function getRealisationsById(req, res) {
  const realisation = req.realisation;
  res.send(realisation);
}
//Suppression d\'une réalisation par son ID
function deleteRealisation(req, res) {
  const realisation = req.realisation;

  const index = RealisationsProject.map(element => element.id).indexOf(
    realisation.id
  );
  RealisationsProject.splice(
    RealisationsProject.map((element) => element.id).indexOf(realisation.id),
    1
  );
  setRealisation(RealisationsProject.length >0 ? RealisationsProject : []);
  res.status(200).json({
    message: `resource deleted successfully`,
    results: RealisationsProject,
    index
  });
}

// Modification
function updateRealisation(req, res) {
  
  const index = RealisationsProject.map((element) => element.id).indexOf(
    req.realisation.id
  );
  const { nom, description, type, image } = req.body;

  RealisationsProject[index].nom = nom;
  RealisationsProject[index].description = description;
  RealisationsProject[index].type = type;
  RealisationsProject[index].image = image;

  setRealisation(RealisationsProject);

  res.status(200).json({
    message: `resource updated successfully`,
    results: RealisationsProject,
  });
}
// Création
function createRealisation(req, res) {

  const id = crypto.randomBytes(8).toString("hex");

  const { nom, description, type, image } = req.body;

  const realisation = { id, nom, description, type, image };

  RealisationsProject.push(realisation);

  setRealisation(RealisationsProject);

  res.status(200).json({
    message: `resource created successfully`,
    results: RealisationsProject,
  });
}

module.exports = {
  getRealisations,
  getRealisationsById,
  createRealisation,
  updateRealisation,
  deleteRealisation,
};
