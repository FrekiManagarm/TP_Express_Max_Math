const router = require('express').Router();
const gameRouter = require('./routers/game.js');
const playerRouter = require('./routers/player.js');

router.use('/games', gameRouter);
router.use('/players', playerRouter);

module.exports = router;
