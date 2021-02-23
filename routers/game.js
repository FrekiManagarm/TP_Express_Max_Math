const router = require('express').Router();
const expr = require('express');
const gamePlayer = require('./game/player.js');

const app = expr();

app.set("view engine", "ejs");


router.get('/', (req, res, next) => {
  console.log("dans games");
  res.send("dans games");
});

router.post('/', (req, res, next) => {
  res.send('POST /games');
});

router.get('/new', (req, res, next) => {
  console.log("/games/new");
  res.send('/games/new');
});

router.get('/:id', (req, res, next) => {
  res.send('/games/'+req.params.id);
});

router.get('/:id/edit', (req, res, next) => {
  res.send('/games/'+req.params.id+'/edit');
});

router.patch('/:id', (req, res, next) => {
  res.send('PATCH /games/'+req.params.id);
});

router.delete('/:id', (req, res, next) => {
  res.send('DELETE /games/'+req.params.id);
});

router.use('/:id/players', gamePlayer);

router.post('/:id/shots', (req, res, next) => {
  res.send('POST /games/'+req.params.id+'/shots');
});

module.exports = router;
