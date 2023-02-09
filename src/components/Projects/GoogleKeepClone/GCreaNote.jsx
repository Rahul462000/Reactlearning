import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";

const GCreaNote = (props) => {
    const[expand,setExpand] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // jab user kuch type karega to hame use note mwin store karwana hai as current data

//   onChange event function
  const inputEvent =( event) =>{
    console.log(event.target.value);
    
    const {name,value} = event.target
    setNote((olData) =>{
        return {
            ...olData,
            [name] : value,    
        }
    })
  }

//   onlcick button function 
const addEvent =() =>{
    props.passNote(note);
    setNote({
        title:'',
        content:''
    })
}

const expanded =() =>{
    setExpand(true)

}

const backToNormal =() =>{
    setExpand(false)
}

  return (
    <>
      <div className="main_note"  onDoubleClick={backToNormal}>
        <form>
            {expand?
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={inputEvent}
            placeholder="title"
            autoComplete="off"
          /> : "none"}
          <textarea
            cols="30"
            rows="10"
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="write a note here"
            onClick={expanded}
          ></textarea>

          
          <Button onClick={addEvent}>
            <AddIcon className="plus_sign" />
          </Button>
        </form>
      </div>
    </>
  );
};

export default GCreaNote;
