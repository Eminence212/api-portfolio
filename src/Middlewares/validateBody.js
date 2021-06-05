
const validateBody = (req, res, next) => {
  const values = [req.body.nom, req.body.description,req.body.type,req.body.image];
  
  if (values.some((value) => value.length === 0)) {
    return res.status(422).json({ message: "Please fill correctly fields" });
  }
  next();
};

module.exports = validateBody;
