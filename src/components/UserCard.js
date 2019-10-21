import React from 'react';

const UserCard = (props) => {
  const style = {
    background: `url(${props.avatar}) center center no-repeat`,
    backgroundSize: 'cover'
  };

  return (
    <div className="col-md-4">
      <div className="user-card d-flex">
        <div className="avatar" style={style}></div>
        <div className="card-details d-flex flex-column align-items-start">
          <h5 className="pb-1">{props.name}</h5>
          <a
            href={props.publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm mb-1"
          >
            Public Profile
          </a>

          <button className="btn btn-primary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
