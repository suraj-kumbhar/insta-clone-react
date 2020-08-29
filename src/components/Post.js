import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          alt="Suraj Kumbhar"
          src="/static/images/avatar/1.jpg"
          className="post__avatar"
        />
        <h3>Suraj</h3>
      </div>

      <img
        src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp"
        className="post__image"
      />
      <h4 className="post__text">
        <strong>suraj-kumbhar</strong> : Awsome day 1 learning React
      </h4>
    </div>
  );
}

export default Post;
