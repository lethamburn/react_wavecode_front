import React from "react";
import { InfoUser, UserForm, CommentBox } from "../../components";
import "./Comments.scss";

const Comments = () => {
  return (
    <div className="main-container div-comments">
      <InfoUser />
      <CommentBox />
      <UserForm />
    </div>
  );
};

export default Comments;
