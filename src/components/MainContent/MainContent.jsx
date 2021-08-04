import React from "react";
import InfoHome from "../InfoHome/InfoHome";
import "./MainContent.scss";

const MainContent = ({ title, view }) => {
  return (
    <div className="main-content">
      <h1>{title}</h1>
      {view === "home" ? <InfoHome /> : null}
    </div>
  );
};

export default MainContent;
