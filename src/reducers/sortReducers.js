import { SORT_SET, SORT_RESET } from '../constants/sortConstants';

export const sortReducer = (state = {}, action) => {
  switch (action.type) {
    case SORT_SET:
      return {
        by: action.payload.sortByValue,
        direction: action.payload.sortDirection,
      };
    case SORT_RESET:
      return {};
    default:
      return state;
  }
};
