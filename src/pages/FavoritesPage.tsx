import { PostsContainer } from '@/components/PostsContainer';
import useFavoritePosts from '@/hooks/useFavoritePosts';
import React, { FunctionComponent } from 'react';

const FavoritesPage: FunctionComponent = () => {
  const { favoritePosts, addToFavorite, removeFromFavorite } =
    useFavoritePosts();

  return (
    <PostsContainer
      posts={favoritePosts}
      favoritePosts={favoritePosts}
      addToFavorite={addToFavorite}
      removeFromFavorite={removeFromFavorite}
    />
  );
};

export { FavoritesPage };
