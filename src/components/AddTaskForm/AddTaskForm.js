import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAddTaskForm } from '../../actions/layoutActions';
import { addItem } from '../../actions/todoListActions';

const AddTaskForm = () => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('high');
  const [nameValid, setNameValid] = useState(true);

  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoList);

  useEffect(() => {
    if (todoList.filter((task) => task.name === name).length > 0) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
  }, [name, todoList, nameValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(toggleAddTaskForm(false));
    dispatch(addItem(name, priority));
  };

  return (
    <div>
      <div>
        <h2>Add Task</h2>
        <form onSubmit={submitHandler}>
          {!nameValid && <p>{`Task ${name} already exist`}</p>}
          <label htmlFor='name'>Name:</label>
          <input
            required
            type='text'
            id='name'
            placeholder='Enter task name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label htmlFor='priority'>Choose Priority:</label>
          <select
            name='priority'
            id='priority'
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
          >
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>
          <button type='submit' disabled={!nameValid || name.length === 0}>
            Create
          </button>
          <button
            type='button'
            onClick={() => dispatch(toggleAddTaskForm(false))}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
