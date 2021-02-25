const router = require('express').Router();
const {sequelize,Player} = require('../models');

router.get('/', async(req, res, next) => {
  console.log("dans players");
  res.send("dans players");
});

router.post('/', async(req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;

  try {
      const player = await Player.create({name, email});

      return res.json(player).redirect('/');
  } catch (e) {

  }
  res.send('POST /players');
});

router.get('/new', async(req, res, next) => {
  console.log("/players/new");
  res.send('/players/new');
});

router.get('/:id', async(req, res, next) => {
  res.send('/players/'+req.params.id);
});

router.get('/:id/edit', async(req, res, next) => {
  res.send('/players/'+req.params.id+'/edit');
});

router.patch('/:id', async(req, res, next) => {
  res.send('PATCH /players/'+req.params.id);
});

router.delete('/:id', async(req, res, next) => {
  res.send('DELETE /players/'+req.params.id);
});

module.exports = router;
