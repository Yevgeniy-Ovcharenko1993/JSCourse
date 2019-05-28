const people = [
  { id: 1, name: 'Nick', friends: [2, 5, 6] },
  { id: 2, name: 'John', friends: [1, 3] },
  { id: 3, name: 'Mike', friends: [2, 5] },
  { id: 4, name: 'Janny', friends: null },
  { id: 5, name: 'Edward', friends: [1, 3] },
  { id: 6, name: 'Jeen', friends: [5, 1] },
];

function getFriends(num) {
  const user = people.find(person => person.id === num);
  if (!Array.isArray(user.friends)) return null;
  return people.filter(key => Array.isArray(key.friends) && key.friends.includes(num));
}

console.log(getFriends(100500));
