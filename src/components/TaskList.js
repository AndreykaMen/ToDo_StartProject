import React from "react";
import Task from "./Task";

const TaskList = ( { task } ) => {
  return (
      <ul className="todo-list">
        <Task taskItem={ task }/>
      </ul>
  );
};
export default TaskList;