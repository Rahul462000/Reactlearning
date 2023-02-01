import React from "react";

const ToDoComp1 = (props) => {
  return (
    <>
      <div className="todo_style">
      <i className="fa-regular fa-circle-xmark"
       onClick={() =>{
        props.onSelect(props.id)
       }}></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoComp1;
