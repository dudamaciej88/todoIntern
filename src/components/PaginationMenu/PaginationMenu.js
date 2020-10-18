import React from 'react';
import { Wrapper } from './PaginationMenu.style';
import { useDispatch, useSelector } from 'react-redux';
import { setRowsPerPage, setPage } from '../../actions/paginationActions';

const PaginationMenu = () => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.pagination);
  const todoList = useSelector((state) => state.todoList);

  const prevPageClickHandler = () => {
    dispatch(setPage(pagination.page - 1));
  };

  const nextPageClickHandler = () => {
    dispatch(setPage(pagination.page + 1));
  };

  return (
    <Wrapper>
      <label htmlFor='rowsPerPage'>Rows per page:</label>
      <select
        name='rowsPerPage'
        id='rowsPerPage'
        onChange={(e) => dispatch(setRowsPerPage(e.target.value))}
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
      </select>
      {pagination.rowsPerPage * (pagination.page - 1) + 1} -{' '}
      {pagination.rowsPerPage * pagination.page > todoList.length
        ? todoList.length
        : pagination.rowsPerPage * pagination.page}{' '}
      of {todoList.length}
      <button onClick={prevPageClickHandler} disabled={pagination.page === 1}>
        left
      </button>
      <button
        onClick={nextPageClickHandler}
        disabled={pagination.rowsPerPage * pagination.page > todoList.length}
      >
        right
      </button>
    </Wrapper>
  );
};

export default PaginationMenu;
