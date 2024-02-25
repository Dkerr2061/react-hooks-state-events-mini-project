import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [ taskState, setTasks ] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  function onDeleteTask(text) {
    const filteredTasks = taskState.filter((task) => {
      return task.text !== text
    })
    setTasks(filteredTasks)
  }

  function onSelectCategory(category) {
    setSelectedCategory(category)
  }

  const filteredCategories = selectedCategory === 'All' ? taskState : taskState.filter((task) => task.category === selectedCategory)

  function onTaskFormSubmit(newTask) {
    setTasks([...taskState, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onSelectCategory={onSelectCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredCategories} onDeleteTask={onDeleteTask}/>
    </div>
  );
}

export default App;
