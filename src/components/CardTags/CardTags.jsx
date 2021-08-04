import React, { useState } from "react";

import "./CardTags.scss";

import { Link } from "react-router-dom";

import Lottie from "lottie-react";
import animationData from "./../../images/4031-voice-recognition.json";

const CardTags = (props) => {
  const [loaded, setLoaded] = useState(false);

  setTimeout(() => {
    setLoaded(true);
  }, 1500);

  const routerID = "/tags/" + props.info._id;
  return (
    <div className="card">
      {!loaded ? (
        <div className="load-div">
          <Lottie animationData={animationData} />
        </div>
      ) : (
        <Link className="card__link" to={routerID}>
          <div className="card__hover" title="{props}" style={{ backgroundImage: `url(${props.info.image})` }}>
            <span className="card__span">{props.info.title}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default CardTags;
