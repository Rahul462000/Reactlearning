import React from "react";
import './Todo.css'
import { useState } from "react";
import ToDoComp1 from "./ToDoComp1";

const Todo = () => {
  // creating hooks to store and show the list of tasks
  // useState() => initial data inputList => current data setInputList => updated data
  const [inputList, setInputList] = useState("");

  // it is used to store the input list items in an array and show them in list one by one
  const [items, setItems] = useState([]);

  //onchange event in input element function is called is created here
  const itemEvent = (event) => {
    // this is a method used to change the state of input list and show to relative postion
    console.log(event.target.value);
    setInputList(event.target.value);
  }; /// this is onChange event function

  // this is onClick event function
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]; // purane array elements jo list ke hai use access karenge phir use updatae kardege current data mein
    });
    setInputList('')     // updated state ko empty kar diya button clicked per
  };

   // deleting items in the list function
   const deleteItems =(id) =>{
    console.log('item deleted')
    alert('item deleted')
    setItems((oldItems) =>{
        return oldItems.filter((arrayElem,index) =>{
            return index !== id;
        })
    })
}

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1> ToDo List </h1>
        <br />
        <input
          type="text"
          placeholder="Add your item"
          onChange={itemEvent} // a function fill fire when something is written in input field
          value={inputList}
        />
        <button type="submit" onClick={listOfItems}>
          +
        </button>
        <ol>
          {/* in map method we haev four attributes 1. current value,2.current value ka index number, 3.konse array ke sath deal kar rahe hai, 4.this */}
          {items.map((itemVal,index) => {
            return <ToDoComp1 key={index} id={index} text={itemVal} onSelect = {deleteItems} />
          })}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
