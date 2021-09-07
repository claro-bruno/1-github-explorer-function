import React from "react";

export default function RepositoryItem(props) {
  const { repository } = props;
  const { name, description, link } = repository;
  return (
    <li>
          <strong>{ name ?? 'Default' }</strong>
          <p>{ description }</p>
          <a href={ link }>
            Acess Repository
          </a>
        </li>
  );
};