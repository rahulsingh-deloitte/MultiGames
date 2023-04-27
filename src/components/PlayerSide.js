import React,{useRef,useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
export const PlayerSide = (props) => {
  const location=useLocation()
  const { from } = location.state
  const[guessWord,setguessWord]=useState(from)
  let id=from.findIndex(element => element === "_");
  const[dindex,setdindex]=useState(id)
  let takeword=(wd,index)=>{
    
  }
  let inputStyle={
    width:25,
    borderStyle:'hidden'
  }
  const inputRef=useRef(null)
  const handleChange=(e,index)=>{
    let val=e.target.value
    console.log(index)

    setdindex(index+1)  }
  
 useEffect(()=>{
  inputRef.current?.focus()
 },[dindex])
  return (
     <div>{guessWord.map((wd,index)=>{
      return(
        <>
        <div key={index} className='btn btn-success btn-lg m-3' onClick={()=>takeword(wd,index)}>
          {wd==='_'?<form name="Myform"><input ref={index===dindex?inputRef:null} type='text' maxLength="1" onChange={(e)=>handleChange(e,index)} style={inputStyle} className='border-left bg-success'/></form>:wd}
          </div>
        </>
        )
     })}</div>
  )
}
