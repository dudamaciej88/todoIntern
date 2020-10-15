import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem, updateItemDone } from '../actions/todoListActions';

const TodoListTableItem = ({ id, name, priority, done }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{name}</td>
      <td>{priority}</td>
      <td>
        <label htmlFor='checkbox'></label>
        <input
          type='checkbox'
          id='checkbox'
          name='checkbox'
          value={done}
          onChange={(e) => dispatch(updateItemDone(id, !done))}
        ></input>
      </td>
      <td>
        <button onClick={() => dispatch(deleteItem(id))}>del</button>
      </td>
    </tr>
  );
};

export default TodoListTableItem;
