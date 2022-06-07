const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { zodiacs } = require('../data/zodiacs');

describe('zodiac-API routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/zodiacs should return a list of zodiacs', async () => {
    const resData = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => ({ id: zodiac.id, name: zodiac.name }));
    expect(resData.body).toEqual(expected);
  });

  it('/zodiacs/:id should return zodiac detail', async () => {
    const resData = await request(app).get('/zodiacs/2');
    const aries = {
      id: '2',
      name: 'aries',
      dates: 'Mar 21 - Apr 19',
      symbol: 'Ram',
    };
    expect(resData.body).toEqual(aries);
  });


  afterAll(() => {
    pool.end();
  });
});
