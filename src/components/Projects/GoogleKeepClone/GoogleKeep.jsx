import React, { useState } from 'react'
import GHeader from './GHeader'
import GFooter from './GFooter'
import GCreaNote from './GCreaNote'
import Note from './Note'

const GoogleKeep = () => {
    const[addItem,setAddItem]= useState([]);

    const addNote = (note) =>{
        alert('i am clicked')
        setAddItem((oldData) =>{
            return [...oldData,note]
        })
        console.log(note)
    }

    const onDelete =(id)=>{
        setAddItem((oldData) =>{
            oldData.filter((currData,index) =>{
                return index!== id
            })
        })
    }
  return (
    <>
    <GHeader />
    <GCreaNote 
    passNote={addNote}
    />
    {addItem.map((val,index) =>{
        return <Note 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        />
    })}
    <GFooter />
    </>
  )
}

export default GoogleKeep