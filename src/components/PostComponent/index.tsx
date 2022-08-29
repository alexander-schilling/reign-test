import React, { FunctionComponent } from 'react';
import { NewsPost } from '@/interfaces/NewsInterfaces';

import timeIcon from '@/assets/images/icons/time/clock.svg';
import solidFavoriteIcon from '@/assets/images/icons/favorite/favorite-solid.svg';
import outlineFavoriteIcon from '@/assets/images/icons/favorite/favorite-outline.svg';

import './styles/PostStyle.css';
import moment from 'moment';

interface PostComponentProps {
  post: NewsPost;
  isFavorite: boolean;
  addToFavorite: (post: NewsPost) => void;
  removeFromFavorite: (post: NewsPost) => void;
  isLast: boolean;
  lastPostElementRef?: (node: any) => void;
}

const PostComponent: FunctionComponent<PostComponentProps> = ({
  post,
  isFavorite,
  addToFavorite,
  removeFromFavorite,
  isLast,
  lastPostElementRef,
}) => {
  const handleClickFavorite = (): void => {
    if (isFavorite) return removeFromFavorite(post);

    return addToFavorite(post);
  };

  const getPostTimestamp = (): JSX.Element => {
    return (
      <div className="post-timestamp">
        <img
          className="post-timestamp-icon"
          src={timeIcon}
          alt="Time Icon"
        ></img>
        <span className="post-timestamp-text">
          {moment(post.created_at).fromNow()} by {post.author}
        </span>
      </div>
    );
  };

  const getFavoriteIcon = (): JSX.Element => {
    if (isFavorite)
      return <img src={solidFavoriteIcon} alt="Solid Favorite Icon" />;

    return <img src={outlineFavoriteIcon} alt="Outline Favorite Icon" />;
  };

  const getPostLeftContent = (): JSX.Element => {
    return (
      <a
        className="post-left-content"
        href={post.story_url}
        target="_blank"
        rel="noreferrer"
      >
        {getPostTimestamp()}
        <span>{post.story_title}</span>
      </a>
    );
  };

  const getPostRightContent = (): JSX.Element => {
    return (
      <div className="post-right-content" onClick={handleClickFavorite}>
        {getFavoriteIcon()}
      </div>
    );
  };

  return (
    <div
      className="post-container"
      ref={
        isLast && lastPostElementRef !== undefined
          ? lastPostElementRef
          : undefined
      }
    >
      {getPostLeftContent()}
      {getPostRightContent()}
    </div>
  );
};

export { PostComponent };
