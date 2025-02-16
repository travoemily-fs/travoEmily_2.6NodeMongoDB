const Characters = require("../models/Characters");

// GET
exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Characters.find({}).populate("house", "name");
    if (!characters.length) {
      return res.status(404).json({
        success: false,
        message: "No characters found in the database.",
      });
    }
    res.status(200).json({
      data: characters,
      success: true,
      message: `${req.method} - request to Character endpoint`,
    });
  } catch (error) {
    console.error("Error fetching all characters:", error.message);

    res.status(500).json({
      success: false,
      message: "The server is experiencing an issue. Try again.",
      error: error.message,
    });
  }
};

// GET by ID
exports.getCharacterByID = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Characters.findById(id).populate("house", "name");
    if (!character) {
      return res.status(404).json({
        success: false,
        message: `Character with ID ${id} not found.`,
      });
    }
    res.status(200).json({
      data: character,
      success: true,
      message: `${req.method} - Retrieved specific character.`,
    });
  } catch (error) {
    console.error(
      `Error fetching character with ID ${req.params.id}:`,
      error.message
    );

    res.status(500).json({
      success: false,
      message: "The server is experiencing an issue. Try again.",
      error: error.message,
    });
  }
};

// POST (create character)
exports.createCharacter = async (req, res) => {
  try {
    const existingCharacter = await Characters.findOne({ name: req.body.name });
    if (existingCharacter) {
      return res.status(400).json({
        success: false,
        message: "A character with this name already exists.",
      });
    }

    const newCharacter = await Characters.create(req.body);
    res.status(201).json({
      data: newCharacter,
      success: true,
      message: "Character created successfully.",
    });
  } catch (error) {
    console.error("Error creating character:", error.message);

    res.status(500).json({
      success: false,
      message: "Server error: Failed to create character. Try again later.",
      error: error.message,
    });
  }
};

// PUT (update character)
exports.updateCharacter = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Characters.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!character) {
      return res.status(404).json({
        success: false,
        message: `Character with ID ${id} not found.`,
      });
    }
    res.status(200).json({
      data: character,
      success: true,
      message: "Character updated successfully.",
    });
  } catch (error) {
    console.error(
      `Error updating character with ID ${req.params.id}:`,
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to update character.",
      error: error.message,
    });
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
        message: `Character with ID ${id} not found.`,
      });
    }
    res.status(200).json({
      data: deleted,
      success: true,
      message: `Character deleted successfully.`,
    });
  } catch (error) {
    console.error(
      `Error deleting character with ID ${req.params.id}:`,
      error.message
    );

    res.status(500).json({
      success: false,
      message: "The server is experiencing an issue. Try again.",
      error: error.message,
    });
  }
};
