import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function NewTaskForm({categories, onTaskFormSubmit}) {
  
  const [ selectCategory, setSelectCategory ] = useState('All')
  const [ newTask, setNewTask ] = useState('')

  function onHandleSubmit(event) {
    event.preventDefault()
    const newTaskToDo = {
      id: uuid(),
      text: newTask,
      category: selectCategory
    }
    onTaskFormSubmit(newTaskToDo)
  }

  function updateNewTask(event) {
    setNewTask(event.target.value)
  }

  function categorySelect(event) {
    setSelectCategory(event.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={onHandleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={updateNewTask} value={newTask}/>
      </label>
      <label>
        Category
        <select name="category" onChange={categorySelect} value={selectCategory}>
          <option value="All">All</option>
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
