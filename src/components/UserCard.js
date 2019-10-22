import React from 'react';

const UserCard = ({name, publicUrl, onClickUser, avatar}) => {
  const style = {
    background: `url(${avatar}) center center no-repeat`,
    backgroundSize: 'cover'
  };

  return (
    <div className="col-md-4">
      <div className="user-card d-flex">
        <div className="avatar" style={style}></div>
        <div className="card-details d-flex flex-column align-items-start">
          <h5 className="pb-1">{name}</h5>
          <a
            href={publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm mb-1"
          >
            Public Profile
          </a>

          <button
            className="btn btn-primary btn-sm"
            onClick={onClickUser}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
