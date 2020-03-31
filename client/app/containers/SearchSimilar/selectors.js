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

export { selectSimilar, makeSelectSimilar };
