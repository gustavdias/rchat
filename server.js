const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require('cors');

// import modules from users.js
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//io's connect and disconnect for people entering and leaving the chat

app.use(cors());
app.use(router);

io.on("connect", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    //addUser() can return only two things, a object that has an error or a object that has a user property
    if (error) return callback(error);
    socket.join(user.room); //joins a user in a room

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    //broadcast sends a message to everyone, except the specific user
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });
  
    //logic to see what user are in a chat
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });
  socket.on("disconnect", () => {
    
    //remove user that disconnect
    const user = removeUser(socket.id);
    if(user){
      io.to(user.room).emit('message',{user: 'admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});

    }
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started.`)
);
