import { useState } from "react";
import { registerApi } from "../../api/auth.api";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./RegisterForm.scss";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const username = '<input type="text" value="Username"/>';
const email = '<input type="email" value="Email"/>';
const password = '<input type="password"/>';
const registerBtn = '<button type="submit">Register</button>';
const emoji = '<emoji src="Select a Emoji" alt="" />';

const INITIAL_STATE = {
  email: "",
  username: "",
  password: "",
  emoji: "",
};

const RegisterForm = (props) => {
  const history = useHistory();
  const [registerForm, setRegisterForm] = useState(INITIAL_STATE);
  const [error, setError] = useState("");

  const submitForm = async (ev) => {
    ev.preventDefault();
    setError("");

    try {
      await registerApi(registerForm);
      setRegisterForm(INITIAL_STATE);
      history.push("/");
    } catch (error) {
      console.log("Error -> Register: ", error);
      setError(error.message);
    }
  };

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  return (
    <div className="container-register">
      <form className="register-form" onSubmit={submitForm}>
        <fieldset className="register-form__fields">
          <label className="register-form__label">
            <span>
              1 <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {emoji}
          </label>
          <div className="user-form__container-emoji">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="user-form__right"
            />
            <select
              name="emoji"
              className="user-form__select"
              onChange={handleInput}
              value={registerForm.emoji}
            >
              <option className="user-form__options" value="😃">
                😃
              </option>
              <option className="user-form__options" value="👽">
                👽
              </option>
              <option className="user-form__options" value="🤘">
                🤘
              </option>
              <option className="user-form__options" value="😺">
                😺
              </option>
              <option className="user-form__options" value="🐴">
                🐴
              </option>
              <option className="user-form__options" value="💾">
                💾
              </option>
              <option className="user-form__options" value="🎮">
                🎮
              </option>
              <option className="user-form__options" value="🎹">
                🎹
              </option>
              <option className="user-form__options" value="🍉">
                🍉
              </option>
              <option className="user-form__options" value="🎠">
                🎠
              </option>
              <option className="user-form__options" value="🌈">
                🌈
              </option>
            </select>
          </div>
        </fieldset>
        <fieldset className="register-form__fields">
          <label className="register-form__label">
            <span>
              3 <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {username}
          </label>
          <input
            className="register-form__input"
            type="text"
            name="username"
            value={registerForm.username}
            onChange={handleInput}
          />
        </fieldset>

        <fieldset className="register-form__fields">
          <label className="register-form__label">
            <span>
              5 <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {email}
          </label>

          <input
            className="register-form__input"
            type="email"
            name="email"
            value={registerForm.email}
            onChange={handleInput}
          />
        </fieldset>

        <fieldset className="register-form__fields">
          <label className="register-form__label">
            <span>
              7 <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {password}
          </label>

          <input
            className="register-form__input"
            type="password"
            name="password"
            value={registerForm.password}
            onChange={handleInput}
          />
        </fieldset>

        {error && <div style={{ color: "red" }}>{error}</div>}

        <fieldset className="register-form__fields">
          <input
            className="register-form__button"
            type="submit"
            value={registerBtn}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterForm;
