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
          {props.name !== null ?
            <h4 className="mb-0">{props.name}</h4>
            : <h4 className="mb-0">{props.login}</h4>
          }
          <small className="text-mutes">@{props.login}</small>
          {props.bio ? <p>{props.bio}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
