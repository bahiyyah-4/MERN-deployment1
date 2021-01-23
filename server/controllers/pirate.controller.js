const { Pirate } = require('../models/pirate.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPirate = (request, response) => {
    const { name, crewPosition, pirateCatchPhrases, image, treasureChest, peg, hook, eye } = request.body;
    Pirate.create({
        name,
        crewPosition,
        pirateCatchPhrases,
        image,
        treasureChest,
        peg,
        hook,
        eye,
    })
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllPirates = (request, response) => {
    Pirate.find({})
        .then(pirate => { response.json(pirate) })
        .catch(error => { response.status(400).json(error) })
}

module.exports.getPirate = (request, response) => {
    Pirate.findById({ _id: request.params.id })
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err))
}

module.exports.updatePirate = (request, response) => {
    Pirate.findByIdAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPirate => response.json(updatedPirate))
        .catch(err => response.status(400).json(err))
}

module.exports.deletePirate = (req, res) => {
    Pirate.findByIdAndDelete({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err));
}