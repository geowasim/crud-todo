import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton'
import { nanoid } from 'nanoid';



const FILTER_MAP = {
  All: ()=> true,
  Active: task => !task.completed,
  Completed: task => task.completed
}
const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {

  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All')

//////////// ADD-CREATE /////////////////
  function addTask(name) {
    const newTask = { id: "todo-"+nanoid() , name: name, completed: false };
    setTasks([...tasks, newTask])
  }
//////////// DELETE ////////////////////
  function deleteTask(id) {
    const remainingItems = tasks.filter(task => id !== task.id)
    setTasks(remainingItems)
  }
///////////// EDIT-UPDATE ////////////////////
  function editTask(id, newName) {
    console.log(id)
    const editTaskList = tasks.map(task => {
      //if this has the same Id then edit task
      if (id === task.id) {
        return {
          ...task,
          name: newName
        }
      }
      return task;
    });
    setTasks(editTaskList)
  }

  
  function toggleTaskCompleted(id) {
    const updateTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })

    setTasks(updateTasks)
  }

  /////////////TODO///////////////////
  const taskLists = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
    <Todo
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed} 
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask = {editTask}
    />)
  )
//////filter buttons///////////
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const oneCount = taskLists.length !==1 ? 'tasks' :'task'
  const headingText = `${taskLists.length} ${filter} ${oneCount}`
  

  return (
    <div className="todoapp stack-large">
      <h1>CUARD in TODO</h1>
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {
          filterList
        }
        
      </div>
      <h2 id="list-heading">
        {headingText}
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
          taskLists 
        }
      </ul>
    </div>
  );
}

export default App;