import React, { useState, useContext } from "react";
import { postComment } from "../../api/fetch.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./UserForm.scss";
import { UserContext } from "../../App";

const text = '<textarea type="text" value="Post a new comment.." />';

const UserForm = () => {
  const user = useContext(UserContext);
  const [comment, setComment] = useState({ comment: "", idUser: user._id });

  const [error, setError] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    setError("");

    try {
      await postComment(comment);
      setComment("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setComment({ ...comment, [name]: value });
  };

  return (
    <>
      <form className="user-form" onSubmit={submitForm}>
        <fieldset className="user-form__fields">
          <label className="user-form__label">
            <span>
              1 <FontAwesomeIcon icon={faChevronDown} />
              {text}
            </span>
          </label>
          <textarea
            className="user-form__textarea"
            name="comment"
            id=""
            cols="5"
            rows="3"
            onChange={handleInput}
          ></textarea>
        </fieldset>

        {/* {error && <div style={{ color: "red" }}>{error}</div>} */}

        <fieldset className="user-form__fields">
          <input className="user-form__button" type="submit" value="Submit" />
        </fieldset>
      </form>
    </>
  );
};

export default UserForm;
