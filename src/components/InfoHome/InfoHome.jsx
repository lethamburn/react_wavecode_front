import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./InfoHome.scss";
// import logo from "./../../images/logo-wave-code.png";
import logo from "./../../images/LOGO-SVG.svg";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faPlayCircle } from "@fortawesome/free-regular-svg-icons";

const InfoHome = () => {
  return (
    <div className="info-home">
      <img src={logo} alt="Wave Code logo" />
      <Link to="/tags">
        <h3>
          Show all Tags
          <span>
            <FontAwesomeIcon icon={faPlayCircle} />
          </span>
        </h3>
      </Link>
      <Link to="/playlists">
        <h3>
          Show all Playlist
          <span>
            <FontAwesomeIcon icon={faHeadphonesAlt} />
          </span>
        </h3>
      </Link>
      <Link to="/comments">
        <h3>
          Show the Comments
          <span>
            <FontAwesomeIcon icon={faBookmark} />
          </span>
        </h3>
      </Link>
    </div>
  );
};

export default InfoHome;
