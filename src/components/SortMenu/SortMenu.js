import React from 'react';
import { Wrapper } from './SortMenu.style';
import { setSort } from '../../actions/sortActions';
import { useDispatch } from 'react-redux';

const SortMenu = ({sortByValue}) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button onClick={() => dispatch(setSort(sortByValue, 'up'))}>up</button>
      <button onClick={() => dispatch(setSort(sortByValue, 'down'))}>down</button>
    </Wrapper>
  );
};

export default SortMenu;
