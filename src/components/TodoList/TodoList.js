import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import TodoListTableItem from './TodoListItem/TodoListItem';
import { Wrapper, ListHeaderWrapper, P, HeadNSort } from './TodoList.style';
import SortMenu from '../SortMenu/SortMenu';
import PaginationMenu from '../PaginationMenu/PaginationMenu';

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
  const sort = useSelector((state) => state.sort);
  const pagination = useSelector((state) => state.pagination);

  const [todoSortedList, setTodoSortedList] = useState(todoList);
  const [paginatedList, setPaginatedList] = useState(todoSortedList);

  useEffect(() => {
    if (sort.by === 'name' && sort.direction === 'down') {
      const sortedArr = todoList.sort((a, b) =>
        a['name'] > b['name'] ? 1 : b['name'] > a['name'] ? -1 : 0
      );
      setTodoSortedList([...sortedArr]);
    } else if (sort.by === 'name' && sort.direction === 'up') {
      const sortedArr = todoList.sort((b, a) =>
        a['name'] > b['name'] ? 1 : b['name'] > a['name'] ? -1 : 0
      );
      setTodoSortedList([...sortedArr]);
    } else if (sort.by === 'priority' && sort.direction === 'up') {
      const lowArr = todoList.filter((todo) => todo.priority === 'Low');
      const mediumArr = todoList.filter((todo) => todo.priority === 'Medium');
      const highArr = todoList.filter((todo) => todo.priority === 'High');
      const sortedArr = [...lowArr, ...mediumArr, ...highArr];
      setTodoSortedList([...sortedArr]);
    } else if (sort.by === 'priority' && sort.direction === 'down') {
      const lowArr = todoList.filter((todo) => todo.priority === 'Low');
      const mediumArr = todoList.filter((todo) => todo.priority === 'Medium');
      const highArr = todoList.filter((todo) => todo.priority === 'High');
      const sortedArr = [...highArr, ...mediumArr, ...lowArr];
      setTodoSortedList([...sortedArr]);
    } else if (sort.by === 'done' && sort.direction === 'up') {
      const trueArr = todoList.filter((todo) => todo.done);
      const falseArr = todoList.filter((todo) => !todo.done);
      const sortedArr = [...falseArr, ...trueArr];
      setTodoSortedList([...sortedArr]);
    } else if (sort.by === 'done' && sort.direction === 'down') {
      const trueArr = todoList.filter((todo) => todo.done);
      const falseArr = todoList.filter((todo) => !todo.done);
      const sortedArr = [...trueArr, ...falseArr];
      setTodoSortedList([...sortedArr]);
    } else {
      setTodoSortedList(todoList);
    }
  }, [sort, todoList]);

  useEffect(() => {
    const paginatedList = todoSortedList.slice(
      pagination.rowsPerPage * (pagination.page - 1),
      pagination.rowsPerPage * pagination.page
    );

    setPaginatedList(paginatedList);
  }, [pagination, todoSortedList]);

  return (
    <Wrapper>
      <ListHeaderWrapper>
        <HeadNSort grow={10}>
          <P>Task name</P>
          <SortMenu sortByValue={'name'} />
        </HeadNSort>
        <HeadNSort style={{ width: '100px', maxWidth: '100px' }} grow={1}>
          <P>Priority</P>
          <SortMenu sortByValue={'priority'} />
        </HeadNSort>
        <HeadNSort style={{ width: '100px', maxWidth: '100px' }} grow={1}>
          <P>Done</P>
          <SortMenu sortByValue={'done'} />
        </HeadNSort>
      </ListHeaderWrapper>
      <div>
        {paginatedList.map((todo) => (
          <TodoListTableItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            done={todo.done}
          />
        ))}
      </div>
      <PaginationMenu />
    </Wrapper>
  );
};

export default TodoList;
