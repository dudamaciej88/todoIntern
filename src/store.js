import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { layoutAddTaskFormReducer } from './reducers/layoutReducers';
import { todoListReducer } from './reducers/todoListReducers';
import { sortReducer } from './reducers/sortReducers';

const reducer = combineReducers({
  layoutAddTaskForm: layoutAddTaskFormReducer,
  todoList: todoListReducer,
  sort: sortReducer,
});

const todoListFromStorage = localStorage.getItem('todoList')
  ? JSON.parse(localStorage.getItem('todoList'))
  : [];

const initialState = {
  todoList: todoListFromStorage,
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
