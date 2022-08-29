import React, { FunctionComponent } from 'react';
import { NewsPost } from '@/interfaces/NewsInterfaces';
import { PostComponent } from '../PostComponent';

import './styles/PostsContainerStyle.css';

interface PostsContainerProps {
  posts: NewsPost[];
  favoritePosts: NewsPost[];
  addToFavorite: (post: NewsPost) => void;
  removeFromFavorite: (post: NewsPost) => void;
  lastPostElementRef?: (node: any) => void;
}

const PostsContainer: FunctionComponent<PostsContainerProps> = ({
  posts,
  favoritePosts,
  addToFavorite,
  removeFromFavorite,
  lastPostElementRef,
}) => {
  return (
    <div className="posts-container">
      {posts.map((post, index) => (
        <PostComponent
          key={`${post.story_id}_${index}`}
          post={post}
          isFavorite={favoritePosts.some((p) => p.story_id === post.story_id)}
          addToFavorite={addToFavorite}
          removeFromFavorite={removeFromFavorite}
          isLast={index === posts.length - 1}
          lastPostElementRef={lastPostElementRef}
        />
      ))}
    </div>
  );
};

export { PostsContainer };
