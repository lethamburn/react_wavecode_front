import { useState } from "react";
import { loginApi } from "../../api/auth.api";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LoginForm.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const label = ' <input type="email"/>';
const password = '<input type="password"/>';
const loginBtn = '  <button type="submit">Login</button>';

// const label = '<label className="login-form__label">Email</label>';

const LoginForm = (props) => {
  const history = useHistory();
  const [error, setError] = useState("");

  const submitForm = async (ev) => {
    ev.preventDefault();
    setError("");

    try {
      const { email, password } = ev.target;
      const form = {
        email: email.value,
        password: password.value,
      };

      const user = await loginApi(form);
      props.saveUser(user);
      history.push("/");

    } catch (error) {
      console.log("Error -> Login", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <form className="login-form" onSubmit={submitForm}>
        <fieldset className="login-form__fields"></fieldset>
        <fieldset className="login-form__fields">
          <label className="login-form__label">
            <span>
              1 <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {label}
          </label>
          <input className="login-form__input" type="email" name="email" />
        </fieldset>

        <fieldset className="login-form__fields">
          <label className="login-form__label">
            <span>
              3 <FontAwesomeIcon icon={faChevronDown} />
            </span>{" "}
            {password}
          </label>
          <input className="login-form__input" type="password" name="password" />
        </fieldset>

        {error && <div style={{ color: "red" }}>{error}</div>}
        <fieldset className="login-form__fields">
          <input className="login-form__button" type="submit" value={loginBtn} />
        </fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
