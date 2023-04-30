const _ = require('lodash');

const item = [1,[2,[3,[4]]]];

const newI = _.flattenDeep(item);

console.log(_);