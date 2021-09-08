import React, { useEffect, useState } from "react";
import RepositoryItem from "../RepositoryItem";
import "./style.scss";


export default function RepositoryList() {


  // https://api.github.com/orgs/rocketseat/repos
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    /*
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data)); */
  
     /* async function loadRepositories() {
      const response = await fetch(
        "https://api.github.com/orgs/rocketseat/repos"
      );

      const result = await response.json();

      setRepositories(result);
    }

    loadRepositories(); */

    
    (async () => {
      const response = await fetch(
        "https://api.github.com/orgs/rocketseat/repos"
      );
      const result = await response.json();
      setRepositories(result);
    })();

  },[]);

    return (
      <section className="repository-list">
        <h1>RepositoryList</h1>
        <ul>
        {
          repositories.map((repository) => {
            return <RepositoryItem key={repository.id} repository={repository} />
          })
        };
      </ul>
      </section>
    );
  }




