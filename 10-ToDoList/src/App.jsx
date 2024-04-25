
import { useState } from "react"
import AddTaskModal from "./AddTaskModal"
import List from "./List"
 
function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('taskList'), JSON.stringify('taskList')) || [])

  if (taskList.length === 0) {
    localStorage.setItem('taskList', JSON.stringify([]))
  }

  return (
    
    <div className="container">
    <h1>To Do List</h1>
    <hr/>
    <List taskList={taskList}/>
    <hr />
    <div className="text-end">
      <AddTaskModal taskList={taskList} setTaskList={setTaskList}/>
      <button
      type="button"
      className="btn btn-sm btn-outline-primary"
      data-bs-toggle="modal"
      data-bs-target="#addTaskModal">
        <i className="bi bi-plus-lg"></i>
        Add

      </button>
    </div>
    
  </div>

  )
}

export default App
