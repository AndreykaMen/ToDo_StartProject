import React from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import Footer from "./Footer";

const App = () => {
  const filterData = [
    { id: 'b0', classSelect: "selected", filterName: 'All' },
    { id: 'b1', classSelect: null, filterName: 'Active' },
    { id: 'b2', classSelect: null, filterName: 'Completed' }
  ];
  const taskData = [
    {
      id: 't0',
      classItem: "completed",
      description: "Completed task",
      createdItem: "created 17 seconds ago",
      edit: false
    },
    {
      id: 't1',
      classItem: "editing",
      description: "Editing task",
      createdItem: "created 5 minutes ago",
      edit: true
    },
    {
      id: 't2',
      classItem: null,
      description: "Active task",
      createdItem: "created 5 minutes ago",
      edit: false
    }
  ];
  return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm/>
        </header>
        <section className="main">
          <TaskList task={ taskData }/>
          <Footer filter={ filterData }/>
        </section>
      </section>
  );
};
export default App;