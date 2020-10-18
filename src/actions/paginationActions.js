import {
  PAGINATION_ROWSPERPAGE_SET,
  PAGINATION_PAGE_SET,
} from '../constants/paginationConstants';

export const setRowsPerPage = (rowsPerPage) => (dispatch) => {
  dispatch({
    type: PAGINATION_ROWSPERPAGE_SET,
    payload: rowsPerPage,
  });
};

export const setPage = (page) => (dispatch) => {
  dispatch({
    type: PAGINATION_PAGE_SET,
    payload: page,
  });
};
