import React from "react";
import TasksFilterItem from "../tasksFilterItem";

import './tasksFilter.css';

const TasksFilter =()=>{
  const btn = [
      {id: 'b'+0, classItem: "selected", btnName: "All"},
      {id: 'b'+1, classItem: null, btnName: "Active"},
      {id: 'b'+2, classItem: null, btnName: "Completed"},
  ]
  return (
      <ul className="filters">
        <TasksFilterItem button = {btn}/>
      </ul>
  )
}
export default TasksFilter;

