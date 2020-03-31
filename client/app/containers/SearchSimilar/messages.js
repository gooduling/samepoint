/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Search';

export default defineMessages({
  findSimilarBtn: {
    id: `${scope}.findSimilarBtn`,
    defaultMessage: 'Find Similar',
  },
  showBtn: {
    id: `${scope}.showBtn`,
    defaultMessage: 'Show Similar',
  },
  hideBtn: {
    id: `${scope}.hideBtn`,
    defaultMessage: 'Hide',
  },
});
