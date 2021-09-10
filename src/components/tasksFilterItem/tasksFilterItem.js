import React from "react";
import './tasksFilterItem.css'

const TasksFilterItem =({button})=>{
  return button.map(item=>{
    const {id, classItem, btnName} = item;
    return (
        <li key={id}>
          <button className={ classItem }>{btnName}</button>
        </li>
    )
  })
}

export default TasksFilterItem;