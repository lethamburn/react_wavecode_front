import React, { useEffect, useState } from "react";
import { GET_PLAYLISTS } from "../../api/fetch.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";

const ListPlaylists = () => {
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
    <ul className="ul-list">
      {playlists.map((playlist) => {
        return (
          <li key={JSON.stringify(playlist)}>
            <FontAwesomeIcon icon={faRecordVinyl} className="ul-icon"/>
            {playlist.title}
          </li>
        );
      })}
    </ul>
  );
};

export default ListPlaylists;
