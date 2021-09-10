import React from "react";
import './task.css';

const Task =({task})=>{
  return(
  task.map(item=>{
    const {id, classItem, description, created} = item;
    return (
        <li key={id} className={classItem}>
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label>
            <span className="description">{description}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"/>
          <button className="icon icon-destroy"/>
        </div>
        </li>
    )
  })
  )
}

export default Task;