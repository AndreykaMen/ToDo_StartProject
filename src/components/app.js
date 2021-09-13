import React, { Component } from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import Footer from "./Footer";

export default class App extends Component {
  state = {
    taskData: [
      {
        id: 0,
        done: false,
        classItem: null,
        description: "Completed task",
        createdItem: "created 17 seconds ago",
        edit: false
      },
      {
        id: 1,
        done: false,
        classItem: null/*"editing"*/,
        description: "Editing task",
        createdItem: "created 5 minutes ago",
        edit: true
      },
      {
        id: 2,
        done: false,
        classItem: null,
        description: "Active task",
        createdItem: "created 5 minutes ago",
        edit: false
      }
    ]
  };
  filterData = [
    { id: 'b0', classSelect: "selected", filterName: 'All' },
    { id: 'b1', classSelect: null, filterName: 'Active' },
    { id: 'b2', classSelect: null, filterName: 'Completed' }
  ];

  onToggleCompleted = ( id, classItem ) => {
    const newStateTask = this.state.taskData.map( ( elem ) => {
      if ( elem.id === id ) {
        elem.done = !elem.done;
        elem.classItem = "completed";
        if ( classItem ) elem.classItem = null;
      }
      return elem;
    } );
    this.setState( {
      newStateTask
    } );
  };

  onDeleteItem = ( id ) => {
    this.setState( ( { taskData } ) => {
      const idx = taskData.findIndex( ( el ) => el.id === id );
      const [...copyArray] = taskData;
      copyArray.splice( idx, 1 );
      return {
        taskData: copyArray
      };
    } );
  };

  render() {
    return (
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <NewTaskForm/>
          </header>
          <section className="main">
            <TaskList task={ this.state.taskData }
                      onToggleCompleted={ this.onToggleCompleted }
                      onDeleted={ this.onDeleteItem }
            />
            <Footer filter={ this.filterData }/>
          </section>
        </section>
    );
  }
};
