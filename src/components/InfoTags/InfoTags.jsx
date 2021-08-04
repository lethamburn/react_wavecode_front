import React, { useEffect, useState } from "react";
import "./InfoTags.scss";
import { GET_TAGS } from "./../../api/fetch.api";
import { CardTags } from "../../components";

const InfoTags = () => {
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
    <div className="info-tags__container">
      {tags.map((tag) => {
        return <CardTags info={tag} key={JSON.stringify(tag)} from={"tag"} />;
      })}
    </div>
  );
};

export default InfoTags;
