"use strict";
const getNames = (userList, id) => {
    if (Array.isArray(id)) {
        const names = [];
        userList.forEach((user) => {
            if (id.includes(user.id)) {
                names.push(user.name);
            }
        });
        return names;
    }
    const found = userList.find((user) => user.id === id);
    if (found) {
        return found.name;
    }
    return '';
};
const users = [
    { name: 'John', id: 1, address: '' },
    { name: 'Joi', id: 2, address: '' },
    { name: 'Kevin', id: 3, address: '' }
];
const John = getNames(users, 1);
const JohnAndKevin = getNames(users, [1, 3]);
