/*
 *
 * SearchSimilar actions
 *
 */
import { SEARCH_FOR_SIMILAR, SEARCH_FOR_SIMILAR_ERROR, SEARCH_FOR_SIMILAR_SUCCESS } from './constants';

export const searchForSimilar = (payload) => ({
  type: SEARCH_FOR_SIMILAR,
  ...payload,
});

export const searchForSimilarSuccess = (payload) => ({
  type: SEARCH_FOR_SIMILAR_SUCCESS,
  ...payload,
});

export const searchForSimilarError = (payload) => ({
  type: SEARCH_FOR_SIMILAR_ERROR,
  ...payload,
});
