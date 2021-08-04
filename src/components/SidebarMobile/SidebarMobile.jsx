import React, {useContext} from 'react';
import './SidebarMobile.scss';
import SearchBar from "../SearchBar/SearchBar";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { withRouter, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen, faFolder } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../App";


const SidebarMobile = (props) => {
    const location = props.location.pathname;
    const user = useContext(UserContext);
    return ( 
        <div className="sidebar-mobile">
   
      <div className="sidebar-mobile__title">
        <FontAwesomeIcon icon={faChevronDown} />
        <span>Explorer</span>
      </div>
      <SimpleBar autoHide={false} forceVisible="y" style={{ maxHeight: 500 }}>
        <div>
          <ul className="sidebar-mobile__list">
            <li>
              <FontAwesomeIcon
                icon={location === "/" ? faFolderOpen : faFolder}
                className="sidebar-mobile__folder"
              />
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <FontAwesomeIcon
                icon={location === "/tags" ? faFolderOpen : faFolder}
                className="sidebar-mobile__folder"
              />
              <NavLink exact to="/tags">
                Tags
              </NavLink>
           
            </li>
            <li>
              <FontAwesomeIcon
                icon={location === "/playlists" ? faFolderOpen : faFolder}
                className="sidebar-mobile__folder"
              />
              <NavLink to="/playlists">Playlists</NavLink>
           
            </li>
            {user ? (
            <li>
              <FontAwesomeIcon
                icon={location === "/comments" ? faFolderOpen : faFolder}
                className="sidebar-mobile__folder"
              />
              <NavLink to="/comments">Comments</NavLink>
            </li>
            ): null}
            <li>
              <FontAwesomeIcon
                icon={location === "/about" ? faFolderOpen : faFolder}
                className="sidebar-mobile__folder"
              />
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </div>
     );
}
 
export default withRouter(SidebarMobile);
