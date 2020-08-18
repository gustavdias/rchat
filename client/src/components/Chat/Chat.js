import React, { useState, useEffect } from "react";
//this helps retrieving data from the url:
import queryString from "query-string";
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import "./Chat.css";

let socket;

//location comes from react-router and gives you a prop called location. With it you get a url back
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  //For showing what users are in the chat
  const [users, setUsers] = useState("");

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // const ENDPOINT = "localhost:5000";
  const ENDPOINT = "https://super-rchat-app.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    //Since the return statement finishes the useEffect hooks. It is a good option for ummounting, for disconnecting effects.
    return () => {
      //emit a disconnect event, the name should be the same as in index.js (server)
      socket.emit("disconnect");
      socket.off(); //it turns off the chat off socket.emit("join", { name, room },
    };
  }, [ENDPOINT, location.search]); //Only when ENDPOINT, location.search changes, that the DOM will update. You can emit events from your client socket side

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    //Show what users are in the chat
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  //function for sending messages
  const sendMessage = (event) => {
    event.preventDefault(); // prevents default behaviour of of whole page refresh when a keypress or bottom click
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message, messages);
  return (
    <div className="outerContainer">
      <div className="chatContainer">
        <div className="iB">
          <InfoBar room={room} users={users} />
        </div>

        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users} />
    </div>
  );
};

export default Chat;
