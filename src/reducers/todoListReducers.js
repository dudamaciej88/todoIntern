import {
  TODOLIST_ITEM_ADD,
  TODOLIST_ITEM_DELETE,
  TODOLIST_ITEM_IS_DONE,
} from '../constants/todoListConstants';

export const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case TODOLIST_ITEM_ADD:
      return [...state, action.payload];
    case TODOLIST_ITEM_DELETE:
      return state.filter((item) => item.id !== action.payload);
    case TODOLIST_ITEM_IS_DONE:
      const { id, value } = action.payload;
      const updatedTodoList = state.map((item, i) => {
        if (item.id === id) {
          state[i] = {
            name: item.name,
            priority: item.priority,
            id: item.id,
            done: value,
          };
          return state[i];
        } else {
          return item;
        }
      });
      console.log(id, value);
      console.log(updatedTodoList);
      return [...state];
    default:
      return state;
  }
};
