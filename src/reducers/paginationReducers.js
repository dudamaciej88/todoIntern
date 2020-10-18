import {
  PAGINATION_ROWSPERPAGE_SET,
  PAGINATION_PAGE_SET,
} from '../constants/paginationConstants';

export const paginationReducer = (
  state = { rowsPerPage: 5, page: 1 },
  action
) => {
  switch (action.type) {
    case PAGINATION_ROWSPERPAGE_SET:
      return {
        rowsPerPage: action.payload,
        page: 1,
      };
    case PAGINATION_PAGE_SET:
      return {
        rowsPerPage: state.rowsPerPage,
        page: action.payload,
      };
    default:
      return state;
  }
};
