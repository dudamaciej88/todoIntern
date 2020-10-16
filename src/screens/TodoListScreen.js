import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddTaskForm } from '../actions/layoutActions';
import AddTaskForm from '../components/AddTaskForm/AddTaskForm';
import TodoListTable from '../components/TodoListTable/TodoList';
import Button from '../components/Button/Button';

const TodoListScreen = () => {
  const layout = useSelector((state) => state.layoutAddTaskForm);

  const dispatch = useDispatch();
  return (
    <>
      {layout.isVisible && <AddTaskForm />}
      <div>
        <Button onClick={() => dispatch(toggleAddTaskForm(true))}>
          Add New Task
        </Button>
        <TodoListTable />
      </div>
    </>
  );
};

export default TodoListScreen;
