const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly - firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe']", () => {
  const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];
  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("returns { 'Jason': 1, 'Fang': 2 } for countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false })", () => {
    assert.deepEqual(result, { 'Jason': 1, 'Fang': 2 });
  });
});