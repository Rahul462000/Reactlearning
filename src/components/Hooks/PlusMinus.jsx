import React from 'react'
import './plusminus.css'
import { useState } from 'react'

// below are three methods to inport material ui icons and to use it we have to import them as component
import AddIcon from '@mui/icons-material/Add';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import FlagIcon from '@mui/icons-material/Flag';
import {Button}  from '@material-ui/core';
import Tooltip from '@mui/material/Tooltip';

// import Clock from 'react-digital-clock'  just a basic usage of node package manager
 
const PlusMinus = () => {
    const [number,setNumber] = useState(0)

    const incrementNum =() =>{
        setNumber(number+1)
    }
    const decrementNum =() =>{
        if(number > 0){
        setNumber(number-1)
        }else{
            alert('you have reached the limit')
            setNumber(0)
        }
    }


    const originalState =() =>{
        setNumber(0)
    }


  return (
    <>

    <div className="main_div">
        <div className="center_div">
            <h1>{number}</h1>
            <div className="button_div"> 
            {/* here we have imported material ui icons as a component */}
            <Tooltip title="Increment">
            <Button onClick={incrementNum}><AddIcon />
            </Button>  
            </Tooltip>
            <Tooltip title="originalState">
            <Button onClick={originalState}><FlagIcon />
            </Button>
            </Tooltip>
            <Tooltip title="Decrement">
            <Button onClick={decrementNum}><IndeterminateCheckBoxIcon />
            </Button>
            </Tooltip>
            </div>
            
{/* <Clock /> */}
        </div>
    </div>
    </>
  )
}

export default PlusMinus