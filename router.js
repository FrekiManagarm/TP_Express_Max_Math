const router = require('express').Router();
const gameRouter = require('./routers/game.js');

router.use('/games', gameRouter);

module.exports = router;
