import React from "react";
import Task from "./Task";

const TaskList = ( { task, onToggleCompleted } ) => {
  const taskElement = task.map( item => {
    const { id, classItem, ...taskProps } = item;
    return (
        <li key={ id } className={ classItem }>
          <Task
              onToggleCompleted={ () => onToggleCompleted( id, classItem ) }
              { ...taskProps }
          />
        </li>
    );
  } );
  return (
      <ul className="todo-list">
        { taskElement }
      </ul>
  );
};
export default TaskList;