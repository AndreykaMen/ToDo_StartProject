import React from "react";
import Task from "./Task";

const TaskList = ( { task } ) => {
  const taskElem = task.map( ( item ) => {
    const { id, classItem, ...itemTask } = item;
    return (
        <li key={ id } className={ classItem }>
          <Task
              { ...itemTask }
          />
        </li>
    );
  } );
  return (
      <ul className="todo-list">
        { taskElem }
      </ul>
  );
};
export default TaskList;