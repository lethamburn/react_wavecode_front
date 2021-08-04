import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const info = "WaveCode/info";
const master = "master";
const antonio = "Antonio Rosales";
const oscar = "Oscar Serna";
const andres = "Andrés Fabregat";

const Footer = () => {
  return (
    <div className="footer">
      <p className="typing">
        <span className="gitHub">{info}</span>
        <span className="master">
          {" > "}
          {master}
          {" > "}
        </span>
        <a target="_blank" rel="noreferrer" href="https://lethamburn.github.io/react_portfolio/">
          {antonio}
        </a>
      </p>
      <p className="typing">
        <span className="gitHub">{info}</span>
        <span className="master">
          {" > "}
          {master}
          {" > "}
        </span>
        <a target="_blank" rel="noreferrer" href="https://github.com/oscar-coderookie">
          {oscar}
        </a>
      </p>
      <p className="typing">
        <span className="gitHub">{info}</span>
        <span className="master">
          {" > "}
          {master}
          {" > "}
        </span>
        <a target="_blank" rel="noreferrer" href="https://github.com/ntres">
          {andres}
        </a>
      </p>
      <p className="terminal">
        {">"}
        <span className="cursor">_</span>
      </p>
      <div className="container-copyright">
        <p className="copyright">
          © 2021 Copyright: WaveCode.com - Created by <NavLink to="/about">Team 2</NavLink>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
