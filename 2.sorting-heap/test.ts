interface IUser {
  name: string;
  id: number;
  address: string;
  // ...
}

const getNames = (userList: IUser[], id: number | number[]): string | string[] => {
  if (Array.isArray(id)) {
    const names: string[] = [];
    userList.forEach((user: IUser) => {
      if (id.includes(user.id)) {
        names.push(user.name);
      }
    })
    return names;
  }
  const found = userList.find((user: IUser) => user.id === id);
  if (found) {
    return found.name;
  }
  return ''
}

const users: IUser[] = [
  {name: 'John', id: 1, address: ''},
  {name: 'Joi', id: 2, address: ''},
  {name: 'Kevin', id: 3, address: ''}
]

const John = getNames(users, 1);
const JohnAndKevin = getNames(users, [1, 3]);