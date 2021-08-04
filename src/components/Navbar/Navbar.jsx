import React, { useContext, useState } from "react";
import { UserContext } from "../../App";

import { logout } from "../../api/auth.api";

import { withRouter, NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "./../../images/LOGO-SVG.svg";

const login = "<Login />";
const register = "<Register />";
const logoutText = "<Logout />";

const Navbar = (props) => {
  const user = useContext(UserContext);

  const logoutSesion = async () => {
    await logout();
  };

  const [breakpoint, setBreakpoint] = useState(true);
  const handleWindowResize = () => {
    if (window.innerWidth > 1024) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth > 1024) {
      setBreakpoint(true);
    } else {
      setBreakpoint(false);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="nav__left">
        <img src={logo} alt="Wave Code logo" />
      </div>
      {breakpoint ? (
        <div className="nav__center">
          <span>WaveCode{props.location.pathname}</span>
        </div>
      ) : null}

      <div className="nav__right">
        {!user ? (
          <>
            <NavLink exact to="/login">
              <span className="nav__icon">{login} </span>
            </NavLink>
            <NavLink exact to="/register">
              <span className="nav__icon">{register} </span>
            </NavLink>
          </>
        ) : (
          <>
            <span className="nav__icon">Hello {user.username} {user.emoji}</span>
            <span className="nav__icon" onClick={logoutSesion}>
              {logoutText}
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
