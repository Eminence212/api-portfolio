const fs = require("fs");
const newDataJson = fs.readFileSync("data.json");

// Lecture 
const getRealisation = () => {
   return JSON.parse(newDataJson);
}

// Ecriture
const setRealisation = data => {
  const dataStringified = JSON.stringify(data);
  fs.writeFileSync("data.json", dataStringified);
}
module.exports = {
    getRealisation,
    setRealisation
};
