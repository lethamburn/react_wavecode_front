import React, { useState } from "react";
import { Spoty } from "../../components";
import "./Card.scss";

import Lottie from "lottie-react";
import animationData from "./../../images/4031-voice-recognition.json";

const Card = (props) => {
  const [loaded, setLoaded] = useState(false);

  const changeLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="card">
      {!loaded ? (
        <div className="load-div">
          <Lottie animationData={animationData} />
        </div>
      ) : null}
      {props.from !== "tag" ? (
        <Spoty changeLoad={changeLoad} playlistID={props.info.playlistID} />
      ) : (
        <img src={props.info.image} alt={props.info.title} />
      )}
    </div>
  );
};

export default Card;
