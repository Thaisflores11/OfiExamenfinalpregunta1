import React from 'react'
import './styles/tarjeta.css'
const tarjeta = ({img,titlo,parr}) => {   
  return (
    <div className='tarjet'>
        <img src={img} alt="" />
        <h2>{titlo}</h2>
        <p>{parr}</p>
      
    </div>
  )
}

export default tarjeta
