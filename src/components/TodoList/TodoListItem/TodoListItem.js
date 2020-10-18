import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, updateItemDone } from '../../../actions/todoListActions';
import {
  ItemWrapper,
  P,
  DoneAndTrashWrapper,
  TrashIcon,
} from './TodoListItem.style';

const TodoListTableItem = ({ id, name, priority, done }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ItemWrapper>
        <P grow={10}>{name}</P>
        <P grow={1}>{priority}</P>
        <DoneAndTrashWrapper grow={1}>
          <label style={{ position: 'absolute' }} htmlFor='checkbox'></label>
          <input
            type='checkbox'
            id='checkbox'
            name='checkbox'
            value={done}
            checked={done}
            onChange={(e) => dispatch(updateItemDone(id, !done))}
          />
          <button onClick={() => dispatch(deleteItem(id))}>
            <TrashIcon />
          </button>
        </DoneAndTrashWrapper>
      </ItemWrapper>
    </>
  );
};

export default TodoListTableItem;
