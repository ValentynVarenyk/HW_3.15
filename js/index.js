// <{(--------- Завдання №1 ---------)}>
const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};

// <{(--------- Завдання №2 ---------)}>
const getUsersWithFriend = (users, friendName) => {
  return users.reduce((result, user) => {
    if (user.friends.includes(friendName)) {
      result.push(user.name);
    }
    return result;
  }, []);
};

// <{(--------- Завдання №3 ---------)}>
const getNamesSortedByFriendsCount = users => {
  return users
    .reduce((arr, user) => {
      arr.push(user);
      return arr;
    }, [])
    .sort((a, b) => a.friends.length - b.friends.length)
    .reduce((names, user) => {
      names.push(user.name);
      return names;
    }, []);
};

// <{(--------- Завдання №4 ---------)}>
const getSortedUniqueSkills = users => {
  const uniqueSkills = users.reduce((skills, user) => {
    user.skills.forEach(skill => {
      if (!skills.includes(skill)) {
        skills.push(skill);
      }
    });
    return skills;
  }, []);

  return uniqueSkills.sort();
};


// <{(--------- ПЕРЕВІРКА ---------)}>
console.log(calculateTotalBalance(users)); // 20916

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]

console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

console.log(getNamesSortedByFriendsCount(users));

console.log(getSortedUniqueSkills(users));