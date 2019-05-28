const classes = [
  'header',
  'menu',
  'menu_item',
  'tabs',
  'tab_item',
  'menu',
  'link',
  'tabs',
  'tab_item',
  'menu',
  'menu_item',
  'menu',
  'menu_item',
];

function transformArray(arr) {
  const temp = {};
  arr.forEach(item => {
    if (item in temp) {
      temp[item] += 1;
    } else {
      temp[item] = 1;
    }
  });
  return temp;
}

console.log(transformArray(classes));
