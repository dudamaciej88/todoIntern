import { SORT_SET } from '../constants/sortConstants';

export const setSort = (sortByValue, sortDirection) => (dispatch) => {
  dispatch({
    type: SORT_SET,
    payload: { sortByValue, sortDirection },
  });
};
