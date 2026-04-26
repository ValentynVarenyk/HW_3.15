// <{(--------- Завдання # (або "№") 1 ---------)}>
const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};

// <{(--------- Завдання # (або "№") 2 ---------)}>
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

// <{(--------- Завдання # (або "№") 3 ---------)}>
const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

// <{(--------- Завдання # (або "№") 4 ---------)}>
const getSortedUniqueSkills = users => {
  return [...new Set(users.flatMap(user => user.skills))].sort();
};


// <{(--------- ПЕРЕВІРКА ЗАВДАНЬ ---------)}>
console.log(calculateTotalBalance(users)); // 20916

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]