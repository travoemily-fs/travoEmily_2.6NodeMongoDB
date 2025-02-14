const Characters = require("../models/Characters");

// GET
exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Characters.find({});
    res.status(200).json({
      data: characters,
      success: true,
      message: `${req.method} - request to Character endpoint`,
    });
  } catch (error) {
    console.log(error);
  }
};

// GET by ID
exports.getCharacterByID = (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json({
      id,
      success: true,
      message: `${req.method} - request to Character endpoint`,
    });
  } catch (error) {
    console.log(error);
  }
};

// POST
exports.createCharacter = async (req, res) => {
  const { character } = req.body;
  try {
    const newCharacter = await Characters.create(character);
    console.log("data >>>", newCharacter);
    res.status(200).json({
      success: true,
      message: `${req.method} - request to Character endpoint`,
    });
  } catch (error) {
    console.log(error);
  }
};

// PUT
exports.updateCharacter = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await Characters.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      data: character,
      success: true,
      message: `${req.method} - request to Character endpoint`,
    });
  } catch (error) {
    console.log(error);
  }
};

// DELETE
exports.deleteCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Characters.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: `Character ${id} not found. `,
      });
    }
    res.status(200).json({
      data: deleted,
      success: true,
      message: `Character deleted successfully.`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "The server is experiencing an issue. Try again.",
      error: error.message,
    });
  }
};
