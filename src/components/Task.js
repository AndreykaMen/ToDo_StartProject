import React from "react";

const Task = ( { description, createdItem, edit } ) => {
  const inputEdit = edit ? <input type="text" className="edit" defaultValue="Editing task"/> : null;
  return (
      <>
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
      </>
  );
};

export default Task;