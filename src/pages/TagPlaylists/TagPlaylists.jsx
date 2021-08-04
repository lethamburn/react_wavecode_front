import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { TagDetail } from "../../components";

import "./TagPlaylists.scss";

const TagPlaylists = () => {
  return (
    <div className="main-container">
      <SimpleBar autoHide={false} forceVisible="y" style={{ height: "100%" }}>
        <TagDetail />
      </SimpleBar>
    </div>
  );
};

export default TagPlaylists;
