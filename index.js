const { any } = require('./utils/arrays');
const anyDirectly = require('./utils/arrays/any');
const {
  zipper: { zip },
} = require('./utils');

console.log(any([0, 1, 2, 0], x => x >= 2));
console.log(anyDirectly([0, 1, 2, 0], x => x >= 2));
console.log(zip(['a', 'b'], [1, 2], [true, false]));
