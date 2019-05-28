const recTestin = num => {
  if (num === 0) return;
  console.log(num);
  recTestin(num - 1);
};
recTestin(10);
