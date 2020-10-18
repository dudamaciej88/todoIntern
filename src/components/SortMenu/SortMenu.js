import React from 'react';
import { Wrapper } from './SortMenu.style';
import { setSort } from '../../actions/sortActions';
import { useDispatch, useSelector } from 'react-redux';
import ArrowButton from '../ArrowButton/ArrowButton';

const SortMenu = ({ sortByValue, disabled }) => {
  const dispatch = useDispatch();

  const sort = useSelector((state) => state.sort);

  return (
    <Wrapper>
      <ArrowButton
        active={sort.by === sortByValue && sort.direction === 'up' ? true : undefined}
        direction={'up'}
        onClick={() => dispatch(setSort(sortByValue, 'up'))}
      ></ArrowButton>
      <ArrowButton
        active={sort.by === sortByValue && sort.direction === 'down' ? true : undefined}
        direction={'down'}
        onClick={() => dispatch(setSort(sortByValue, 'down'))}
      ></ArrowButton>
    </Wrapper>
  );
};

export default SortMenu;
