const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('gamePlayer:'+req.params.id);
});

module.exports = router;
