const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

module.exports = Router().get('/', (req, res) => {
  const zodiac_list = zodiacs.map((zodiac) => ({ id: zodiac.id, name: zodiac.name }));
  res.json(zodiac_list);
});
