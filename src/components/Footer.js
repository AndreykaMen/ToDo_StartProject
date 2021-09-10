import React from "react";
import TasksFilter from "./TasksFilter";

const Footer = ( { filter } ) => {
  return (
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <ul className="filters">
          <TasksFilter filterData={ filter }/>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
  );
};
export default Footer;

