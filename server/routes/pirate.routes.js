const PirateController = require('../controllers/pirate.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = function (app) {
    app.get('/api', PirateController.index);
    app.post('/api/pirate', PirateController.createPirate);
    app.get('/api/pirates', authenticate, PirateController.getAllPirates);
    app.get('/api/pirate/:id', PirateController.getPirate);
    app.put('/api/pirate/:id', PirateController.updatePirate);
    app.delete('/api/pirate/:id', PirateController.deletePirate)
}