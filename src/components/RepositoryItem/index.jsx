import React from "react";
import "./style.scss";

export default function RepositoryItem(props) {
  const { repository } = props;
  const { name, description, html_url } = repository;
  return (
    <li>
          <strong>{ name }</strong>
          <p>{ description }</p>
          <a href={ html_url }>
            Acess Repository
          </a>
        </li>
  );
};