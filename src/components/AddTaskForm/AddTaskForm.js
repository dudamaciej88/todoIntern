import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../actions/todoListActions';
import { Wrapper, BtnsWrapper, PError } from './AddTaskForm.style';
import Button from '../Button/Button';
import StyledLink from '../StyledLink/StyledLink.style';

const AddTaskForm = ({history}) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('High');
  const [nameValid, setNameValid] = useState(true);

  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoList);

  useEffect(() => {
    if (todoList.filter((task) => task.name === name).length > 0 ) {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
  }, [name, todoList, nameValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    history.push('/')
    dispatch(addItem(name, priority));
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <h2>Add Task</h2>
        {!nameValid && (
          <PError>{`Task ${name} already exist, change task name.`}</PError>
        )}
        {name.length > 40 && (
          <PError>{`Task name is too long, max is 30 characters.`}</PError>
        )}
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
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
        <BtnsWrapper>
          <StyledLink
            to='/'
          >
            Go Back
          </StyledLink>
          <Button
            type='submit'
            disabled={!nameValid || name.length === 0 || name.length > 40}
            onClick={submitHandler}
          >
            Create
          </Button>
        </BtnsWrapper>
      </form>
    </Wrapper>
  );
};

export default AddTaskForm;
