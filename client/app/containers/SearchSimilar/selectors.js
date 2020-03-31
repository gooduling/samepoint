/*
 *
 * SearchSimilar selectors
 *
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSimilar = state => state.similar || initialState;

const makeSelectSimilar = () =>
  createSelector(
    selectSimilar,
    similarState => similarState.similarDic,
  );

const makeLoadersSimilar = () =>
  createSelector(
    selectSimilar,
    similarState => similarState.loaders,
  );

export { selectSimilar, makeSelectSimilar, makeLoadersSimilar };
