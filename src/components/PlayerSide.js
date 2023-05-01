import React,{useRef,useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
export const PlayerSide = (props) => {
  const location=useLocation()
  const { from,orignal } = location.state
  const[guessWord,setguessWord]=useState(from)
  const[check,setcheck]=useState(from)
  let yellow = '#ffc805';
  const [bgColor, setBgColor] = useState(yellow);
  let id=from.findIndex(element => element === "_");
  const[dindex,setdindex]=useState(id)
  let takeword=(wd,index)=>{
    console.log(orignal)
    guessWord[index]="_"
    setguessWord(guessWord)
    setdindex(index)
    console.log(guessWord)
    if(bgColor===yellow){
      let purple = '#A020F0';
      setBgColor(purple);
  }else{
      setBgColor(yellow)
  }
  }
  let inputStyle={
    width:25,
    borderStyle:'hidden',
    color:'#fc671c'
  }
  const inputRef=useRef(null)
  const handleChange=(e,index)=>{
    let val=e.target.value
    check[index]=val
    console.log(check)
    let d=guessWord.findIndex(element => element === "_");
    console.log(d)
    setdindex(d)
    
    if(check.join('').toUpperCase()===orignal){alert("BINGO")}
  
  }
  
 useEffect(()=>{
  inputRef.current?.focus()
 },[dindex])
  return (
     <div>{guessWord.map((wd,index)=>{
      return(
        <>
        <div key={index} className='btn btn-success btn-lg m-3' onClick={()=>takeword(wd,index)}>
          {wd==='_'?<form name="Myform"><input ref={index===dindex?inputRef:null} type='text' maxLength="1" onChange={(e)=>handleChange(e,index)} style={inputStyle} className='border-left bg-success'/></form>:<div>{wd}</div>}
          </div>
        </>
        )
     })}</div>
  )
}
