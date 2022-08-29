import { useState, useEffect } from 'react';
import { NewsPost } from '@/interfaces/NewsInterfaces';
import {
  getFavoritePostsFromStorage,
  saveFavoritePostsToStorage,
} from '@/utils/news';

interface useFavoritePostsReturnType {
  favoritePosts: NewsPost[];
  addToFavorite: (post: NewsPost) => void;
  removeFromFavorite: (post: NewsPost) => void;
}

const useFavoritePosts = (): useFavoritePostsReturnType => {
  const [favoritePosts, setFavoritePosts] = useState<NewsPost[]>([]);

  const addToFavorite = (post: NewsPost): void => {
    setFavoritePosts((prevPosts) => [...prevPosts, post]);
  };

  const removeFromFavorite = (post: NewsPost): void => {
    setFavoritePosts((prevPosts) =>
      prevPosts.filter((p) => p.story_id !== post.story_id),
    );
  };

  const loadFavoritePostsFromStorage = (): void => {
    setFavoritePosts(getFavoritePostsFromStorage());
  };

  const saveCurrentFavoritePostsToStorage = (): void => {
    saveFavoritePostsToStorage(favoritePosts);
  };

  useEffect(loadFavoritePostsFromStorage, []);

  useEffect(saveCurrentFavoritePostsToStorage, [favoritePosts]);

  return { favoritePosts, addToFavorite, removeFromFavorite };
};

export default useFavoritePosts;
