import axios from 'axios';
import { Category, FullArticle, News } from '../../types';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/',
});

export const Api = {
  getCategoryList: (): Promise<Category[]> => instance.get('/categories').then(({ data }) => data),

  getNewsList: (categoryId: string, page: number, size: number): Promise<News> =>
    instance.get(`/articles/news/${categoryId}?page=${page}&size=${size}`).then(({ data }) => data),

  getArticle: (articleId: string): Promise<FullArticle> =>
    instance.get(`/articles/${articleId}`).then(({ data }) => data),
};
