import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import { NewsType } from '@/interfaces/NewsInterfaces';
import { PostsContainer } from '@/components/PostsContainer';
import { FilterSelectComponent } from '@/components/FilterSelectComponent';
import useFavoritePosts from '@/hooks/useFavoritePosts';
import usePostNews from '@/hooks/usePostNews';

const NewsPage: FunctionComponent = () => {
  const [currentFilter, setCurrentFilter] = useState<NewsType | undefined>(
    undefined,
  );
  const [currentPage, setCurrentPage] = useState(0);
  const { isLoading, posts, hasMore } = usePostNews(currentFilter, currentPage);
  const { favoritePosts, addToFavorite, removeFromFavorite } =
    useFavoritePosts();

  const observer = useRef<IntersectionObserver>();
  const lastPostElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current !== undefined) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      });

      if (node !== null) observer.current.observe(node);
    },
    [isLoading, hasMore],
  );

  return (
    <div>
      <FilterSelectComponent
        currentFilter={currentFilter}
        updateCurrentFilter={setCurrentFilter}
        updateCurrentPage={setCurrentPage}
      />
      <PostsContainer
        posts={posts}
        favoritePosts={favoritePosts}
        addToFavorite={addToFavorite}
        removeFromFavorite={removeFromFavorite}
        lastPostElementRef={lastPostElementRef}
      />
    </div>
  );
};

export { NewsPage };
