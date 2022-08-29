import { useEffect, useState } from 'react';
import { NewsType, NewsPost } from '@/interfaces/NewsInterfaces';
import axios, { Canceler } from 'axios';
import { isPostValid } from '@/utils/news';

interface usePostNewsReturnType {
  isLoading: boolean;
  error: boolean;
  posts: NewsPost[];
  hasMore: boolean;
}

const usePostNews = (
  filter: NewsType | undefined,
  pageNumber: number,
): usePostNewsReturnType => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setPosts([]);
  }, [filter]);

  useEffect(() => {
    let cancel: Canceler | undefined;

    if (filter !== undefined) {
      setIsLoading(true);
      setError(false);

      axios({
        method: 'GET',
        url: 'https://hn.algolia.com/api/v1/search_by_date',
        params: {
          query: filter,
          page: pageNumber,
        },
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then((response) => {
          setPosts((prevPosts) => {
            return [...prevPosts, ...response.data.hits].filter(isPostValid);
          });
          setHasMore(response.data.nbPages > pageNumber);
        })
        .catch((e) => {
          if (axios.isCancel(e)) return;
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    return () => {
      if (cancel !== undefined) cancel();
    };
  }, [filter, pageNumber]);

  return { isLoading, error, posts, hasMore };
};

export default usePostNews;
