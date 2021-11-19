
import React, { useState } from 'react';
import TodoTable from './TodoTable';

const Todolist = () => {
  const [task, setTask] = React.useState({ desc: '', date: '' });
  const [todos, setTodos] = useState([]);
  const [properties,setProperties] =useState({});

  const inputChanged = (event) => {
    setTask({ ...task, [event.target.id]: event.target.value });
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, task]);
    setTask({ desc: '', date: '' });
  }

  const deleteRow = (event) => {
    let newTodos = todos.filter((todo, i) => i != event.target.id);
    setTodos(newTodos);
  }

  return (
    <div>
      
      <form onSubmit={addTodo}>
        <label for="date">Date: </label>
        <input type="date" onChange={inputChanged} value={task.date} id="date" />
        <label for="desc">Description: </label>
        <input type="text" onChange={inputChanged} value={task.desc} id="desc" />
        <button onClick={addTodo}>Add</button>
        <TodoTable todos={todos} deleteRow ={deleteRow}/>
      </form>
    </div>
  );
};

export default Todolist;

