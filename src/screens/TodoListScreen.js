import React from 'react';
import StyledLink from '../components/StyledLink/StyledLink.style';
import TodoList from '../components/TodoList/TodoList';


const TodoListScreen = () => {
  

  
  return (
    <>
      
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <StyledLink to='/addtask' style={{marginTop: '100px'}}>
          Add New Task
        </StyledLink>
        <TodoList />
      </div>
    </>
  );
};

export default TodoListScreen;
