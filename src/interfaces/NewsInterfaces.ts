export type NewsType = 'angular' | 'reactjs' | 'vuejs';

export interface NewsPostHighlightResult {
  value?: string;
  matchLevel?: string;
  matchedWords?: string[];
  fullyHighlighted: boolean | boolean;
}

export interface NewsPost {
  created_at: string;
  title?: string;
  url?: string;
  author?: string;
  points?: number;
  story_text?: string;
  comment_text?: string;
  num_comments?: number;
  story_id: number;
  story_title?: string;
  story_url?: string;
  parent_id?: number;
  created_at_i: number;
  _tags?: string[];
  objectID?: string;
  _highlightResult?: NewsPostHighlightResult;
}

export interface NewsTypeOption {
  value: NewsType;
  label: string;
  image?: string;
}
