import React from "react";

const Task = ( { taskItem } ) => {
  return taskItem.map( item => {
    const { id, classItem, description, createdItem, edit } = item;
    const inputEdit = edit ? <input type="text" className="edit" defaultValue="Editing task"/> : null;
    return (
        <li key={ id } className={ classItem }>
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>
              <span className="description">{ description }</span>
              <span className="created">{ createdItem }</span>
            </label>
            <button className="icon icon-edit"/>
            <button className="icon icon-destroy"/>
          </div>
          { inputEdit }
        </li>
    );
  } );
};

export default Task;