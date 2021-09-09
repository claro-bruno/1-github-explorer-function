import React from "react";
import "./style.scss";

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export default function RepositoryItem(props: RepositoryItemProps) {
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