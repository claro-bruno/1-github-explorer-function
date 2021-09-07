import React from "react";
const repositoryName = 'unform';

class RepositoryList extends React.Component{


  render(){
    return (
      <section className="repository-list">
        <h1>RepositoryList</h1>
        <ul>
        <li>
          <strong>Uniform</strong>
          <p>Forms in ReactJS</p>
          <p> { repositoryName } </p>
          <a href=" ">
            Acess Repository
          </a>
        </li>
      </ul>
      </section>
    );
  }
}

export default RepositoryList;


