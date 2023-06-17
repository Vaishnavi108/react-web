import React from 'react';

const UserCards = ({ id, fullName, avatar, title }) => {
  return (
    <div className="user-card">
      <img src={avatar} alt="Avatar" className="user-card__avatar" />
      <div className="user-card__details">
        <div>ID: {id}</div>
        <div>Full Name: {fullName}</div>
        <div>Title: {title}</div>
      </div>
    </div>
  );
};

export default UserCards;
