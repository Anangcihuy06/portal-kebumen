import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleState } from '@/types';

const initialState: ArticleState = {
  articles: [],
  currentArticle: null,
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    fetchArticlesStart: (state, _action: PayloadAction<{ page: number }>) => {
      state.loading = true;
      state.error = null;
    },
    fetchArticlesSuccess: (state, action: PayloadAction<{ articles: Article[]; hasMore: boolean }>) => {
      state.loading = false;
      if (action.payload.articles.length > 0) {
        state.articles = [...state.articles, ...action.payload.articles];
        state.page += 1;
      }
      state.hasMore = action.payload.hasMore;
    },
    fetchArticlesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchArticleDetailStart: (state, _action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
      state.currentArticle = null;
    },
    fetchArticleDetailSuccess: (state, action: PayloadAction<Article>) => {
      state.loading = false;
      state.currentArticle = action.payload;
    },
    fetchArticleDetailFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetArticles: (state) => {
      state.articles = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
});

export const {
  fetchArticlesStart,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  fetchArticleDetailStart,
  fetchArticleDetailSuccess,
  fetchArticleDetailFailure,
  resetArticles,
} = articleSlice.actions;

export default articleSlice.reducer;
