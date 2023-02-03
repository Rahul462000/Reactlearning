import React from 'react'
import './NewTodo.css'
import { Button } from '@mui/material'
import AddICon from '@mui/icons-material/Add'
import { useState } from 'react'
import NewTodoCom1 from './NewTodoCom1'

const NewTodo = () => {
    const[item,setItem] = useState("");
    const[newItem,setNewItem] = useState([])

    // onchange event function defined here
    const itemEvent = (event) =>{
        console.log(event.target.value);
        setItem(event.target.value);
    }

    // onClick event function defined here
    const listOfItems = () =>{
        setNewItem((oldItems)=>{
            return [...oldItems,item];
        });
        setItem('') 
    }
  return (
    <>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text"  placeholder='Add your item here' 
            onChange={itemEvent}
            value={item} />
            <Button className='newBtn' onClick={listOfItems}>
                <AddICon />
            </Button>
            <br />
            <ol>
                {newItem.map((val,index) =>{
                    return <NewTodoCom1 key={index} text={val} />
                })}
            </ol>
            <br />
        </div>
    </div>
    </>
    )
}

export default NewTodo