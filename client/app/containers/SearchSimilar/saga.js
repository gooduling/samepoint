/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { SEARCH_FOR_SIMILAR } from './constants';
import { searchForSimilarError, searchForSimilarSuccess } from './actions';

import request from '../../utils/request';


/**
 * Github repos request/response handler
 */
export function* getRepos({ query }) {
  const requestURL = `http://127.0.0.1:8000/api/similarity?query=${query}`; // TODO: replace with local

  try {
    // Call our request helper (see 'utils/request')
    const response = yield call(request, requestURL);

    yield put(searchForSimilarSuccess({ similar: response.similar, query }));
  } catch (err) {
    yield put(searchForSimilarError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(SEARCH_FOR_SIMILAR, getRepos);
}
