import React from 'react';
import { Wrapper } from './SortMenu.style';
import { setSort } from '../../actions/sortActions';
import { useDispatch } from 'react-redux';
import ArrowButton from '../ArrowButton/ArrowButton'

const SortMenu = ({sortByValue, disabled}) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ArrowButton direction={'up'} onClick={() => dispatch(setSort(sortByValue, 'up'))}></ArrowButton>
      <ArrowButton direction={'down'} onClick={() => dispatch(setSort(sortByValue, 'down'))}></ArrowButton>
    </Wrapper>
  );
};

export default SortMenu;
