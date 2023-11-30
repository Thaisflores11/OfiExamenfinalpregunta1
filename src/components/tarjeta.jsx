import React from 'react'
import './styles/tarjeta.css'
const tarjeta = ({img,titlo,parr}) => {   
  return (
    <div >
        <p className='parra'>item</p>
        <div className='tarjet'>
            <img src={img} alt="" />
            <div className='texto'>
            <h2>{titlo}</h2>
            <p>{parr}</p>

        </div>
        

    </div>
        
      
    </div>
  )
}

export default tarjeta
