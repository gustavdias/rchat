import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
// import TextContainer from "../TextContainer/TextContainer";

import './InfoBar.css';

const InfoBar = ({ room, users }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <p>Room: {room}</p>
    </div>

    {
      users
        ? (
              <div className="centerInnerContainer">
                {/* <p>People currently chatting:</p> */}
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img alt="Online Icon" src={onlineIcon}/>
                    {`${name}`}
                    
                  </div>
                ))}
              </div>
        )
        : null
    }
        <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close icon" /></a>
    </div>
  </div>
);

export default InfoBar;