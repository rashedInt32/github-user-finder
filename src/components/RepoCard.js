import React from "react";

const RepoCard = ({ name, html_url, description, language }) => {
  return (
    <div className="card mb-3 bg-light">
      <div className="card-body">
        <h4>{name}</h4>
        <p className="mb-1">
          <b>Repo Link: </b>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {html_url}
          </a>
        </p>

        {description ? (
          <p className="card-text mb-1">
            <b>Description: </b>
            {description}
          </p>
        ) : null}

        {language ? (
          <p className="mb-0">
            <b>Language: </b>
            <span className="badge badge-dark">{language}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default RepoCard;
