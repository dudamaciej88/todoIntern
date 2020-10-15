import {
  TODOLIST_ITEM_ADD,
  TODOLIST_ITEM_DELETE,
  TODOLIST_ITEM_IS_DONE
} from '../constants/todoListConstants';
import { v4 as uuidv4 } from 'uuid';

export const addItem = (name, priority) => (dispatch, getState) => {
  dispatch({
    type: TODOLIST_ITEM_ADD,
    payload: { name, priority, id: uuidv4(), done: false },
  });

  localStorage.setItem('todoList', JSON.stringify(getState().todoList));
};

export const deleteItem = (id) => (dispatch, getState) => {
  dispatch({
    type: TODOLIST_ITEM_DELETE,
    payload: id,
  });

  localStorage.setItem('todoList', JSON.stringify(getState().todoList));
};

export const updateItemDone = (id, value) => (dispatch, getState) => {
    dispatch({
        type: TODOLIST_ITEM_IS_DONE,
        payload: {id, value}
    })

    localStorage.setItem('todoList', JSON.stringify(getState().todoList));
};
