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
          <h3>{props.name}</h3>
          <p className="text-mutes">@{props.login}</p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
