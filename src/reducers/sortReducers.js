import { SORT_SET } from '../constants/sortConstants';

export const sortReducer = (state = {}, action) => {
  switch (action.type) {
    case SORT_SET:
      return {
        by: action.payload.sortByValue,
        direction: action.payload.sortDirection,
      };
    default:
      return state;
  }
};
