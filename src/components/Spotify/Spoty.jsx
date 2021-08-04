import React from "react";
import "./Spoty.scss";

const Spoty = (props) => {
  const url = "https://open.spotify.com/embed/playlist/";
  const id = props.playlistID;
  const urlId = url + id;

  return (
    <iframe
      onLoad={() => props.changeLoad()}
      title="Spotify"
      src={urlId}
      width="100%"
      height="100%"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
};

export default Spoty;
