import { readFile } from 'fs';
import { promises } from 'fs';
//import { nanoid } from 'nanoid';

// console.log('it works');

// console.log(`
// =============
// =           =
// =   Hello   =
// =           =
// =============

// `);

// promises
//   .readFile('database.json', 'utf-8')
//   .then(data => JSON.parse(data))
//   .then(json => {
//     console.log(json);
//     json.users = [
//       { name: 'Caro', age: 18, hobbies: ['riding unicorns'] },
//       ...json.users,
//     ];
//     console.log(json);
//   })
//   .catch(error_ => {
//     throw error_;
//   });

async function getDatabase() {
  const content = await promises.readFile('database.json', 'utf-8');
  const data = JSON.parse(content);
  // console.log(data);
  return data;
}

async function addUser(user) {
  const data = await getDatabase();
  console.log(data);
  data.users.push(user);
  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}

// addUser({ id: nanoid(), name: 'Helene', age: 77, hobbies: 'singing' });

async function removeUser(userId) {
  const data = await getDatabase();
  data.users = data.users.filter(user => userId !== user.id);

  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}

//removeUser(1);
//const c = { hobbies: [] };
//const b = c.hobbies;
//b.push(1);
async function updateUser(id, name, hobby) {
  const data = await getDatabase();

  data.users = data.users.map(user => {
    if (user.id === id) {
      user.name = name;
      //user.hobbies.unshift(hobby);
      // let currentHobbies = user.hobbies;
      // let newHobbies = currentHobbies.push(hobby);
      user.hobbies = [hobby, ...user.hobbies];
    }
    return user;
  });
  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}
// updateUser('xfVjrzqpVb9oRv77yb--W', 'Barbara Salesch', 'More more more Hobby');

async function removeHobby(id, hobby) {
  const data = await getDatabase();
  const user = data.users.find(user => user.id === id);
  user.hobbies = user.hobbies.filter(hobby_ => hobby_ !== hobby);

  promises.writeFile('database.json', JSON.stringify(data, null, 4));
}

removeHobby('xfVjrzqpVb9oRv77yb--W', 'More more more Hobby2');
