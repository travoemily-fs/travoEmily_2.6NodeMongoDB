// GET
exports.getAllCharacters = (req, res) => {
  res.status(200).json({
    success: true,
    message: `${req.method} - request to Character endpoint`,
  });
};

// GET by ID
exports.getCharacterByID = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Character endpoint`,
  });
};

// POST
exports.createCharacter = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Character endpoint`,
  });
};

// PUT
exports.updateCharacter = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Character endpoint`,
  });
};

// DELETE
exports.deleteCharacter = (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    success: true,
    message: `${req.method} - request to Character endpoint`,
  });
};

