const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const zodiac = zodiacs.find((zodiac) => zodiac.id === id);
    res.json(zodiac);
  })
  .get('/', (req, res) => {
    const zodiac_list = zodiacs.map((zodiac) => ({ id: zodiac.id, name: zodiac.name }));
    res.json(zodiac_list);
  });
