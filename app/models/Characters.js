const mongoose = require("mongoose");

const charactersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Your must enter a name to proceed."],
    unique: [true, "Characters cannot share the same name."],
    trim: true,
    maxLength: [50, "Your name is too long."],
  },
  age: {
    type: Number,
    required: true,
  },
  house: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "House",
    required: [true, "Hogwarts house is required to proceed."],
  },
  year: {
    type: Number,
    required: [true, "School year is required to proceed."],
    min: [1, "Error. Hogwarts starts with first years."],
    max: [7, "Error. Students graduate Hogwarts after their seventh year."],
  },
  bloodPurity: {
    type: String,
    required: [true, "Blood purity required to proceed."],
  },
}, { timestamps: true }
);

module.exports = mongoose.model("Character", charactersSchema);
