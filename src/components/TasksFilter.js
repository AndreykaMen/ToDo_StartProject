import React from "react";

const TasksFilter = ( { filterData } ) => {
  return filterData.map( item => {
    const { id, classSelect, filterName } = item;
    return (
        <li key={ id }>
          <button className={ classSelect }>{ filterName }</button>
        </li>
    );
  } );

};

export default TasksFilter;