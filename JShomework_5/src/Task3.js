const symObj = { b: 'c', d: { e: 'f' } };

function clone(obj) {
  const copy = {};
  for (const key in obj) {
    if ((copy[key] = obj[key]));
  }
  return copy;
}

console.log(symObj);
console.log(clone(symObj));
console.log(symObj.d);
console.log(clone(symObj.d));
