import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        <span role="img" aria-label="emoji">
          📨
        </span>{" "}
        Realtime/React Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        <span role="img" aria-label="emoji">
          💕
        </span>{" "}
        Created with React, Express, Nodejs and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          💕
        </span>
      </h2>
      <h2>
        <span role="img" aria-label="emoji">
          ⬅️
        </span>{" "}
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          🔥 😀
        </span>
      </h2>
      <h3>
        {" "}
        1. Call a friend{" "}
        <span role="img" aria-label="emoji">
          👋
        </span>{" "}
        to test the app, or open rChat in a{" "}
        <a href="https://rchat-app.netlify.app/">new tab</a>.{" "}
      </h3>
      <h3>
        {" "}
        2. Login as a different user{" "}
        <span role="img" aria-label="emoji">
          🤸
        </span>{" "}
        in the same chat room.
      </h3>
    </div>
    {users ? (
      <div className="peopleOnline">
        <h4>People currently chatting:</h4>
        {/* <div className="activeContainer"> */}
        <div className="capitalize">
          {users.map(({ name }) => (
            <div key={name} className="activeItem">
              <img alt="Online Icon" src={onlineIcon} /> {name}
            </div>
          ))}
        </div>
      </div>
    ) : // </div>
    null}
  </div>
);

export default TextContainer;
