/*
 *
 * SearchSimilar reducer
 *
 */
import produce from 'immer';

import { SEARCH_FOR_SIMILAR, SEARCH_FOR_SIMILAR_ERROR, SEARCH_FOR_SIMILAR_SUCCESS } from './constants';

export const initialState = {
  similarDic: {},
  loaders: {},
};

/* eslint-disable default-case, no-param-reassign */
const searchSimilarReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH_FOR_SIMILAR:
        draft.loaders[action.query] = true;
        break;
      case SEARCH_FOR_SIMILAR_SUCCESS:
        draft.loaders[action.query] = false;
        draft.similarDic[action.query] = action.similar;
        break;
      case SEARCH_FOR_SIMILAR_ERROR:
        draft.loaders[action.query] = false;
        // TODO: add mui-snackbar's reaction
        break;
    }
  });

export default searchSimilarReducer;
