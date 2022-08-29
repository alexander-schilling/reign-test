import {
  NewsPost,
  NewsType,
  NewsTypeOption,
} from '@/interfaces/NewsInterfaces';
import angularIcon from '@/assets/images/icons/angular/angular.png';
import reactIcon from '@/assets/images/icons/reactjs/reactjs.png';
import vueIcon from '@/assets/images/icons/vuejs/vuejs.png';

export const NEWS_TYPES: NewsType[] = ['angular', 'reactjs', 'vuejs'];
export const NEWS_OPTIONS: NewsTypeOption[] = [
  { value: 'angular', label: 'Angular', image: angularIcon },
  { value: 'reactjs', label: 'Reactjs', image: reactIcon },
  { value: 'vuejs', label: 'Vuejs', image: vueIcon },
];
export const DEFAULT_FILTER = 'reactjs';
export const FILTER_KEY = 'news_filter';
export const FAVORITE_KEY = 'news_favorite';

export const isPostValid = (post: NewsPost): boolean => {
  const hasStoryTitle = typeof post.story_title === 'string';
  const hasStoryUrl = typeof post.story_url === 'string';
  const hasCreatedAt = typeof post.created_at === 'string';
  return hasStoryTitle && hasStoryUrl && hasCreatedAt;
};

export const isOfNewsType = (
  keyInput: string | null | undefined,
): keyInput is NewsType => {
  if (typeof keyInput !== 'string') return false;

  const newsTypes = NEWS_TYPES as string[];
  return newsTypes.includes(keyInput);
};

export const getFromStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const saveToStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const getFilterFromStorage = (): NewsType => {
  const storedFilter = getFromStorage(FILTER_KEY);

  if (isOfNewsType(storedFilter)) return storedFilter;

  return DEFAULT_FILTER;
};

export const saveFilterToStorage = (filter: NewsType): void => {
  saveToStorage(FILTER_KEY, filter);
};

export const getFavoritePostsFromStorage = (): NewsPost[] => {
  const storedFavoritePosts = getFromStorage(FAVORITE_KEY);

  if (typeof storedFavoritePosts === 'string')
    return JSON.parse(storedFavoritePosts);

  return [];
};

export const saveFavoritePostsToStorage = (favoritePosts: NewsPost[]): void => {
  saveToStorage(FAVORITE_KEY, JSON.stringify(favoritePosts));
};
