import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoListScreen from './screens/TodoListScreen';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';

function App() {
  return (
    <Router>
      <Route path='/addtask' component={AddTaskForm} exact />
      <Route path='/' component={TodoListScreen} exact/>
    </Router>
  );
}

export default App;
