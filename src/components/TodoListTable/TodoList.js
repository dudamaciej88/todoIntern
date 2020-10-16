import React from 'react';
import { useSelector } from 'react-redux';
import TodoListTableItem from './TodoListTableItem/TodoListItem';
import { Wrapper, ListHeaderWrapper, P, P2 } from './TodoList.style';

const TodoListTable = () => {
  const todoList = useSelector((state) => state.todoList);
  return (
    <Wrapper>
      <ListHeaderWrapper>
        <P grow={10}>Task name</P>
        <P2 grow={1}>Priority</P2>
        <P2 grow={1}>Done</P2>
      </ListHeaderWrapper>
      <div>
        {todoList.map((todo) => (
          <TodoListTableItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            done={todo.done}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default TodoListTable;
