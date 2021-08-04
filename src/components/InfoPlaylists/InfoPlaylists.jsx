import React, { useEffect, useState } from "react";
import "./InfoPlaylists.scss";
import { GET_PLAYLISTS } from "./../../api/fetch.api";
import { Card } from "../../components";

const InfoPlaylist = () => {
  useEffect(() => {
    callApi();
  }, []);

  const [playlists, setPlaylists] = useState([]);

  const callApi = async () => {
    const api = await fetch(GET_PLAYLISTS);
    const resPlaylists = await api.json();
    setPlaylists(resPlaylists);
  };

  return (
    <>
      <div className="info-playlists__container">
        {playlists.map((playlist) => {
          return <Card info={playlist} key={JSON.stringify(playlist)} />;
        })}
      </div>
    </>
  );
};

export default InfoPlaylist;
