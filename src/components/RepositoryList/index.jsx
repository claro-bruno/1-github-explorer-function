import React from "react";
import RepositoryItem from "../RepositoryItem";

export default function RepositoryList() {

  const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform',
  };
    return (
      <section className="repository-list">

        <h1>RepositoryList</h1>
        <ul>
          <RepositoryItem 
            repository={ repository }
          />
          <RepositoryItem 
            repository={ repository }
          />
          <RepositoryItem 
            repository={ repository }
          />
          <RepositoryItem 
            repository={ repository }
          />
      </ul>
      </section>
    );
  }




