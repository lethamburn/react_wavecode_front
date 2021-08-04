import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { InfoPlaylist } from "../../components";

const Playlists = () => {
  return (
    <div className="main-container">
      <SimpleBar autoHide={false} forceVisible="y" style={{ height: "100%" }}>
        <InfoPlaylist />
      </SimpleBar>
    </div>
  );
};

export default Playlists;
