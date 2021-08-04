import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { GET_TAGS } from "../../api/fetch.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const ListTags = () => {
  useEffect(() => {
    callApi();
  }, []);

  const [tags, setTags] = useState([]);

  const callApi = async () => {
    const api = await fetch(GET_TAGS);
    const resTags = await api.json();
    setTags(resTags);
  };

  return (
    <ul className="ul-list">
      {tags.map((tag) => {
        return (
          <li key={JSON.stringify(tag)}>
            <Link className="card__link" to={"/tags/" + tag._id}>
              <FontAwesomeIcon className="ul-icon" icon={faHashtag} />
              {tag.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListTags;
