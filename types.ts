export interface Category {
  id: number;
  name: string;
}

export interface ShortArticle {
  id: number;
  image: string;
  title: string;
  date: string;
  shortDescription: string;
  likesQuantity: number;
}

export interface FullArticle {
  id: number;
  image: string;
  title: string;
  fullDescription: string;
  likesQuantity: number;
}

export interface Pagination<T> {
  rows: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export type News = Pagination<ShortArticle>;
