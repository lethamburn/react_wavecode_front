import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { InfoTags } from "../../components";

import "./Tags.scss";

const Tags = () => {
  return (
    <div className="main-container">
      <SimpleBar autoHide={false} forceVisible="y" style={{ height: "100%" }}>
        <InfoTags />
      </SimpleBar>
    </div>
  );
};

export default Tags;
