import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import CloseIcon from "@material-ui/icons/Close";
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
    <div className="Box-2-centerInnerContainer">
      {users ? (
        <div>
          {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
          Online:
          {users.map(({ name }) => (
            // <p key={name} className="online">{name} </p>
            <strong key={name}>
              {" "}
              {name}
              {" | "}
            </strong>
          ))}
        </div>
      ) : null}
    </div>

    {/* Close icon */}
    <div className="Box-3-rightInnerContainer">
      <a href="/">
        <CloseIcon className="visitedGray" />
      </a>
    </div>
  </div>
);

export default InfoBar;
