import React from 'react'
import {useLocation} from "react-router-dom";
export const PlayerSide = (props) => {
  const location=useLocation()
  const { from } = location.state
  return (
     <div className='btn btn-success btn-lg'>{from}</div>
  )
}
