import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";
export const WordGameLogic = () => {
    
    let reset=()=>{
        
        setTitle("")
    }
    let submit=(e)=>{
        e.preventDefault()
        // localStorage.setItem('word',title)
    }
    let[title,setTitle]=useState("")
    let[duplicate,setduplicate]=useState([])
    let yellow = '#ffc805';
    const [bgColor, setBgColor] = useState(yellow);
   let changeColor =(ind)=>{
    if(duplicate[ind]==='_'){
            duplicate[ind]=title[ind]
            setduplicate(duplicate)
        }else{
            duplicate[ind]="_"
            setduplicate(duplicate)
        }
    if(bgColor===yellow){
        let purple = '#A020F0';
        setBgColor(purple);
    }else{
        setBgColor(yellow)
    }
      
    }
  return (
    <><form onSubmit={submit}>
          <div className="mb-3">
              <label htmlFor="title" className="form-label">Enter The Word</label>
              <input type="text" value={title} onChange={(e) => { setTitle(e.target.value.toUpperCase());setduplicate(e.target.value.toUpperCase().split('')); } } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div>
              <button type="submit" className="btn btn-primary btn-sm">Submit</button>
              <button type="reset" onClick={() => reset()} className="btn btn-success btn-sm m-3">Reset</button></div>
      </form>
      <div className='container text-danger'>{duplicate.map((oneword,index)=>{
        return (
            <>
            <button key={index} className='btn btn-warning btn-lg m-4' onClick={()=>changeColor(index)}>{oneword}</button>
            </>
        )
      })}</div>
     <Link className='btn btn-primary m-5' to="/player" state={{ from: duplicate, orignal:title }}>Launch</Link>
      </>
          
  )
}
