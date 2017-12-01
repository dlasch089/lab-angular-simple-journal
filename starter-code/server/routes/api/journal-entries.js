const express       = require('express');
const router        = express.Router();
const Entry         = require('../../models/journal-entry');

router.get('/journal-entries', (req, res, next) => {
  Entry.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }

    return res.json(entries);
  });
});

router.get('/journal-entries/:id', (req, res, next) => {
  Entry.findById(req.params.id, (err, entry) => {
    if (err)    { return res.json(err).status(500); }
    if (!entry) { return res.json(err).status(404); }

    return res.json(entry);
  });
});

router.post('/journal-entries', (req, res, next) => {
  const newEntry = new Entry({
    title: req.body.title,
    content: req.body.content
  });

  newEntry.save( (err) => { // promises could be used also
    if (err) { return res.status(500).json(err) } // early return instead of an else
    if (newEntry.errors) { return res.status(400).json(newEntry) } // errors in the model
      return res.json(newEntry); // default status: 200, we do not need to specify
  });
});

module.exports = router;
