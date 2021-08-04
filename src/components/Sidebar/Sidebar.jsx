import React, { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { withRouter, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen, faFolder } from "@fortawesome/free-solid-svg-icons";
import { ListTags, ListPlaylists } from "../../components";

import { UserContext } from "../../App";

const Sidebar = (props) => {
  const location = props.location.pathname;
  const user = useContext(UserContext);

  return (
    <div className="sidebar">
      <SearchBar />
      <div className="sidebar__title">
        <FontAwesomeIcon icon={faChevronDown} />
        <span>Explorer</span>
      </div>
      <SimpleBar autoHide={false} forceVisible="y" style={{ maxHeight: 500 }}>
        <div>
          <ul className="sidebar__list">
            <li>
              <FontAwesomeIcon
                icon={location === "/" ? faFolderOpen : faFolder}
                className="sidebar__folder"
              />
              <NavLink exact to="/">
                <span className="sidebar__link">Home</span>
              </NavLink>
            </li>
            <li>
              <FontAwesomeIcon
                icon={location.includes("/tags") ? faFolderOpen : faFolder}
                className="sidebar__folder"
              />
              <NavLink exact to="/tags">
                <span className="sidebar__link">Tags</span>
              </NavLink>
              {location.includes("/tags") ? <ListTags /> : null}
            </li>
            <li>
              <FontAwesomeIcon
                icon={location === "/playlists" ? faFolderOpen : faFolder}
                className="sidebar__folder"
              />
              <NavLink to="/playlists">
                <span className="sidebar__link">Playlists</span>
              </NavLink>
              {location === "/playlists" ? <ListPlaylists /> : null}
            </li>
            {user ? (
              <li>
                <FontAwesomeIcon
                  icon={location === "/comments" ? faFolderOpen : faFolder}
                  className="sidebar__folder"
                />
                <NavLink to="/comments">
                  <span className="sidebar__link">Comments</span>
                </NavLink>
              </li>
            ) : null}
            <li>
              <FontAwesomeIcon
                icon={location === "/about" ? faFolderOpen : faFolder}
                className="sidebar__folder"
              />
              <NavLink to="/about">
                <span className="sidebar__link">About</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </div>
  );
};

export default withRouter(Sidebar);
