import React from "react";
import Task from "../task";

import './taskList.css';

const TaskList =()=>{
  const taskData = [
    {id:0,classItem:"completed", description: 'Completed task 1', created:'created 17 seconds ago'},
    {id:2,classItem:null,description: 'Active task 1', created:'created 5 minutes ago'},
    {id:3,classItem:null,description: 'Active task 2', created:'created 7 minutes ago'},
  ]
  return(
      <ul className="todo-list">
        <Task task={taskData}/>
      </ul>
  )
}
export default TaskList;