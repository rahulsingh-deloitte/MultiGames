import React from 'react'
import { WordGameLogic } from './WordGameLogic'
import {Link} from "react-router-dom";
export const WordGuessGame = () => {
    let gameLogic=()=>{
        <WordGameLogic/> 
    }
  return (
    <>
    <div className='container'>
    <Link className='btn btn-primary m-5' to="/organiser">Organiser</Link>
    <div className='btn btn-success'>Player</div>
    </div>

    </>
  )
}
