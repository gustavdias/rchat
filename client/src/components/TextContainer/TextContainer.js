import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';
import LogoCard from "../Join/LogoCard/LogoCard"

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
  <LogoCard/>
      <h1>Realtime/React Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Nodejs and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;