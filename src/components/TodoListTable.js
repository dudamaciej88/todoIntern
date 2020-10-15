import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoListTableItem from './TodoListTableItem';

const TodoListTable = () => {
  const todoList = useSelector((state) => state.todoList);
  return (
    <table>
      <thead>
        <tr>
          <th>Task name</th>
          <th>Priority</th>
          <th>Done</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todo) => (
          <TodoListTableItem key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            done={todo.done}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TodoListTable;
