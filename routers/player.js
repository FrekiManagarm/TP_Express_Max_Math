const router = require('express').Router();

router.get('/', (req, res, next) => {
  console.log("dans players");
  res.send("dans players");
});

router.post('/', (req, res, next) => {
  res.send('POST /players');
});

router.get('/new', (req, res, next) => {
  console.log("/players/new");
  res.send('/players/new');
});

router.get('/:id', (req, res, next) => {
  res.send('/players/'+req.params.id);
});

router.get('/:id/edit', (req, res, next) => {
  res.send('/players/'+req.params.id+'/edit');
});

router.patch('/:id', (req, res, next) => {
  res.send('PATCH /players/'+req.params.id);
});

router.delete('/:id', (req, res, next) => {
  res.send('DELETE /players/'+req.params.id);
});

module.exports = router;
