import React, { useState } from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { useEffect } from 'react';
import { db } from '../firebase';
import firebase from 'firebase';
import { Input, Button } from '@material-ui/core';

function Post({ username, imageUrl, caption, postId, user }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    let unsubscribe;

    if (postId) {
      unsubscribe = db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();
    db.collection('posts').doc(postId).collection('comments').add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setComment('');
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          alt="Suraj Kumbhar"
          src="/static/images/avatar/1.jpg"
          className="post__avatar"
        />
        <h3>{username}</h3>
      </div>

      <img src={imageUrl} className="post__image" />
      <h4 className="post__text">
        <strong>{username}</strong> : {caption}
      </h4>

      {console.log(`${username} >> ${comments.length}`)}

      {comments.length > 0 && (
        <div className="post__comments">
          {comments.map((comment) => (
            <p>
              <strong>{comment.username}</strong> : {comment.text}
            </p>
          ))}
        </div>
      )}

      {user && (
        <form className="post__commentBox">
          <input
            type="text"
            className="post__input"
            placeholder="Add a comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button
            onClick={postComment}
            disabled={!comment}
            type="submit"
            className="post__button"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
