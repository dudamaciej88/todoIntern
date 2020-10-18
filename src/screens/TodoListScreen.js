import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList/TodoList';


const TodoListScreen = () => {
  

  
  return (
    <>
      
      <div>
        <Link to='/addtask'>
          Add New Task
        </Link>
        <TodoList />
      </div>
    </>
  );
};

export default TodoListScreen;
