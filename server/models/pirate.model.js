const mongoose = require('mongoose');
const PirateSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please enter a Name!"] },
    crewPosition: { type: String, required: [true, "Please enter a Crew Position!"] },
    pirateCatchPhrases: { type: String, required: [true, "Please enter a Catch Phrase!"] },
    image: { type: String, required: [true, "Please enter a Image!"] },
    treasureChest: { type: String, required: [true, "Please enter a total amount of Treasure Chest!"] },
    hook: { type: Boolean, required: [true, "Please enter a Description!"] },
    eye: { type: Boolean, required: [true, "Please enter a Description!"] },
    peg: { type: Boolean, required: [true, "Please enter a Description!"] }
}, { timestamps: true });
module.exports.Pirate = mongoose.model('Pirate', PirateSchema);