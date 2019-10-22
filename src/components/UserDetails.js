import React from 'react';

const UserDetails = (props) => {
  const style = {
    background: `url(${props.avatar}) center center no-repeat`,
    backgroundSize: 'cover'
  };

  return (
    <div className="user-details">
      <div className="basic-info">
        <div className="avatar" style={style}></div>
        <div className="details">
          {props.name !== null ? (
            <h4 className="mb-0">{props.name}</h4>
          ) : (
            <h4 className="mb-0">{props.login}</h4>
          )}
          <small className="text-mutes">
            @{props.login}
            <a
              href={props.blog}
              className="ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.blog}
            </a>
          </small>
          {props.bio ? <p>{props.bio}</p> : null}
          <div className="pt-4">
            <span className="badge badge-primary mr-2">
              Followers: <b>{props.followers}</b>
            </span>
            <span className="badge badge-success mr-2">
              Following: <b>{props.following}</b>
            </span>
            <span className="badge badge-warning">
              Public repos: <b>{props.public_repos}</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
