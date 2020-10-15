import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddTaskForm } from '../actions/layoutActions';
import AddTaskForm from '../components/AddTaskForm';
import TodoListTable from '../components/TodoListTable';

const TodoListScreen = () => {
  const layout = useSelector((state) => state.layoutAddTaskForm);

  const dispatch = useDispatch();
  return (
    <>
      {layout.isVisible && <AddTaskForm />}
      <div>
        <button onClick={() => dispatch(toggleAddTaskForm(true))}>
          Add Task
        </button>
        <TodoListTable/>
      </div>
    </>
  );
};

export default TodoListScreen;
