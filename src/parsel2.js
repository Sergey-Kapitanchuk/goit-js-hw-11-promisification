// ## Задание 2


const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  return new Promise((resolve, reject) => {
  resolve (updatedUsers)
})
  // callback(updatedUsers);
};

const logger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);