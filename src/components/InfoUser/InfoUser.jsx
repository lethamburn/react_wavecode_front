import React, { useContext } from "react";
import "./InfoUser.scss";
import { UserContext } from "../../App";

const InfoUser = () => {
  const user = useContext(UserContext);
  return (
    <div className="infoUser">
      <div>
        Welcome, {user.username} {user.emoji}
      </div>
    </div>
  );
};

export default InfoUser;
