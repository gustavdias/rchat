const users = [];

//add user -----------------------------------
const addUser = ({ id, name, room }) => {
  //trim() removes the leading and trailing white space and line terminator characters from a string
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //check if there is already a user with the inputted username in that specific room
  const existingUser = users.find(
    (user) => user.room === room && user.name === name//same name in the same room
  );

  if (!name || !room) return { error: "Username and room are required." };
  if (existingUser) return { error: "Username is taken." };

  const user = { id, name, room };

  users.push(user);

  return { user };//returns the user that was pushed
};
//remove user -----------------------------------
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
//Why -1 ?????
  if (index !== -1) return users.splice(index, 1)[0]; //1 = one field and 0 = ???
};
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//getUser -----------------------------------
const getUser = (id) => users.find((user) => user.id === id);

//getUser in a specific room -----------------------------------
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
