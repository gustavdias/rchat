import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
// import closeIcon from '../../icons/closeIcon.png';
// import TextContainer from "../TextContainer/TextContainer";
import CloseIcon from "@material-ui/icons/Close";
// import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';


import "./InfoBar.css";

const InfoBar = ({ room, users }) => (
  <div className="infoBarContainer">
    {/* room: roomName */}
    <div className="Box-1-leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <p>
        Room:
        <strong> {room}</strong>
      </p>
    </div>

    {/* People online */}
    {users ? (
      <div className="Box-2-centerInnerContainer">
        <p>
          {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
          Online:
          {users.map(({ name }) => (
            // <p key={name} className="online">{name} </p>
            <strong>
              {" "}
              {name}
              {" | "}
            </strong>
          ))}
        </p>
        {/* <img alt="Online Icon" src={onlineIcon} /> <p><strong> online: 
        </strong></p>{" "}
       */}
      </div>
    ) : null}

    {/* Close icon */}
    <div className="Box-3-rightInnerContainer">
      <a href="/">
        {/* <img src={closeIcon} alt="close icon" /> */}
        <CloseIcon className="visitedGray" />
      </a>
    </div>
  </div>
);

export default InfoBar;
