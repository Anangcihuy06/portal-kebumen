import { call, put, takeLatest } from 'redux-saga/effects';
import { destinations } from '@/data/mockData';
import {
  fetchDestinationsStart,
  fetchDestinationsSuccess,
  fetchDestinationsFailure,
  fetchDestinationDetailStart,
  fetchDestinationDetailSuccess,
  fetchDestinationDetailFailure,
} from '../slices/destinationSlice';
import { Destination } from '@/types';

function* fetchDestinations() {
  try {
    const response: Destination[] = destinations;
    yield put(fetchDestinationsSuccess(response));
  } catch (error) {
    yield put(fetchDestinationsFailure('Failed to fetch destinations'));
  }
}

function* fetchDestinationDetail(action: { type: string; payload: string }) {
  try {
    const destination = destinations.find((d) => d.slug === action.payload);
    if (destination) {
      yield put(fetchDestinationDetailSuccess(destination));
    } else {
      yield put(fetchDestinationDetailFailure('Destination not found'));
    }
  } catch (error) {
    yield put(fetchDestinationDetailFailure('Failed to fetch destination detail'));
  }
}

export default function* destinationSaga() {
  yield takeLatest(fetchDestinationsStart.type, fetchDestinations);
  yield takeLatest(fetchDestinationDetailStart.type, fetchDestinationDetail);
}
