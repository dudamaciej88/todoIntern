import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todoListReducer } from './reducers/todoListReducers';
import { sortReducer } from './reducers/sortReducers';
import { paginationReducer } from './reducers/paginationReducers';

const reducer = combineReducers({
  todoList: todoListReducer,
  sort: sortReducer,
  pagination: paginationReducer,
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
