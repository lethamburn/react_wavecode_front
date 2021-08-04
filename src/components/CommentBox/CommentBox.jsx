import React, { useEffect, useState } from "react";
import { GET_COMMENTS } from "../../api/fetch.api";
import "./CommentBox.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

const CommentBox = () => {
  const [allComments, setAllComments] = useState("");

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const api = await fetch(GET_COMMENTS);
    const resComments = await api.json();
    setAllComments(resComments);
  };

  function getParsedDate(date) {
    date = String(date).split(" ");
    var days = String(date[0]).split("-");
    const fecha = parseInt(days[2]) + "/" + parseInt(days[1]) + "/" + parseInt(days[0]);

    return fecha;
  }

  return (
    <div className="commentbox">
      <h1 className="commentbox__header">Comments</h1>
      <SimpleBar autoHide={false} forceVisible="y" style={{ height: "100%" }}>
        {!allComments ? (
          <p>Loading comments...</p>
        ) : (
          allComments.map((comment) => {
            return (
              <div className="commentbox__container" key={JSON.stringify(comment)}>
                <p className="commentbox__title">
                  {comment.idUser.username} {comment.idUser.emoji} at: {getParsedDate(comment.createdAt)}
                </p>
                <p className="commentbox__comment">"{comment.comment}"</p>
              </div>
            );
          })
        )}
      </SimpleBar>
    </div>
  );
};

export default CommentBox;
