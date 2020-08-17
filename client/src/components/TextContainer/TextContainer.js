import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";
import LogoCard from "../Join/LogoCard/LogoCard";
import logo from "../../icons/android-chrome-192x192.png"

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Realtime/React Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Nodejs and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h4>People currently chatting:</h4>
        <div className="activeContainer">
          <p>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </p>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
