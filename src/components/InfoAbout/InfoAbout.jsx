import React from "react";
import "./InfoAbout.scss";

const InfoAbout = () => {
  const ABOUT_INFO = [
    {
      name: "Andrés Fabregat Nogueras",
      image: "",
      website: "",
      github: "https://github.com/Ntres",
      linkedin: "https://www.linkedin.com/in/andrés-fabregat-04b44a151/",
    },
    {
      name: "Oscar Serna Carvajal",
      image: "",
      website: "",
      github: "https://github.com/oscar-coderookie",
      linkedin:
        "https://www.linkedin.com/in/oscar-eduardo-serna-carvajal-8312667a/",
    },
    {
      name: "Antonio Rosales Martínez",
      image: "",
      website: "",
      github: "https://github.com/lethamburn",
      linkedin:
        "https://www.linkedin.com/in/antonio-rosales-martinez-925397213/",
    },
  ];

  return (
    <div className="info-about">
      {ABOUT_INFO.map((dev) => {
        return (
          <div className="info-about__div">
            <div>
              const <span className="info-about__span1">dev</span> ={" "}
              <span className="info-about__span2">{dev.name} </span>
              {"{"}
            </div>
            <ul>
              {/* <li>
                web:{" "}
                <span>
                  "
                  <a target="_blank" href={dev.website}>
                    {dev.website}
                  </a>
                  "
                </span>
                ,
              </li> */}
              <li>
                gitHub:{" "}
                <span>
                  "
                  <a target="_blank" href={dev.github}>
                    {dev.github}
                  </a>
                  "
                </span>
                ,
              </li>
              <li>
                linkedIn:{" "}
                <span>
                  "
                  <a target="_blank" href={dev.linkedin}>
                    {dev.linkedin}
                  </a>
                  "
                </span>
              </li>
            </ul>
            <span>{"}"}</span>
          </div>
        );
      })}
    </div>
  );
};
export default InfoAbout;
