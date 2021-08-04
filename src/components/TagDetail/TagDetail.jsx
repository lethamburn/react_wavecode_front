import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Spoty } from "../../components";

import { BASE_URL } from "../../api/fetch.api";

import Lottie from "lottie-react";
import animationData from "./../../images/4031-voice-recognition.json";

const TagDetail = (props) => {
  const [tags, setTags] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const api = await fetch(BASE_URL + props.location.pathname);
    const resTags = await api.json();
    setTags(resTags);
  };

  const changeLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <div className="info-playlists__container">
        {tags.playlist
          ? tags.playlist.map((playlist) => {
              return (
                <div className="card">
                  {!loaded ? (
                    <div className="load-div">
                      <Lottie animationData={animationData} />
                    </div>
                  ) : null}
                  <Spoty
                    changeLoad={changeLoad}
                    playlistID={playlist.playlistID}
                  />
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default withRouter(TagDetail);
