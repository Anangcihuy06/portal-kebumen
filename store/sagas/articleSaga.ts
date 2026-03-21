import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { articles } from '@/data/mockData';
import {
  fetchArticlesStart,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  fetchArticleDetailStart,
  fetchArticleDetailSuccess,
  fetchArticleDetailFailure,
  resetArticles,
} from '../slices/articleSlice';
import { Article } from '@/types';

const ITEMS_PER_PAGE = 6;

function* fetchArticles(action: { type: string; payload: { page: number } }) {
  try {
    yield delay(500);
    const startIndex = (action.payload.page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedArticles: Article[] = articles.slice(startIndex, endIndex);
    const hasMore = endIndex < articles.length;
    
    yield put(fetchArticlesSuccess({ articles: paginatedArticles, hasMore }));
  } catch (error) {
    yield put(fetchArticlesFailure('Failed to fetch articles'));
  }
}

function* fetchArticleDetail(action: { type: string; payload: string }) {
  try {
    const article = articles.find((a) => a.slug === action.payload);
    if (article) {
      yield put(fetchArticleDetailSuccess(article));
    } else {
      yield put(fetchArticleDetailFailure('Article not found'));
    }
  } catch (error) {
    yield put(fetchArticleDetailFailure('Failed to fetch article detail'));
  }
}

function* resetArticlesList() {
  yield delay(100);
}

export default function* articleSaga() {
  yield takeLatest(fetchArticlesStart.type, fetchArticles);
  yield takeLatest(fetchArticleDetailStart.type, fetchArticleDetail);
  yield takeLatest(resetArticles.type, resetArticlesList);
}
