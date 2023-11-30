import React from 'react'
import Tarjeta from './tarjeta'
import {tarjeta} from '../assets/icon'
const Uniontarjeta = () => {
  return (
    <div className='estructuraa'>
      
        {tarjeta.map((tarjeta,index)=>(
            <Tarjeta
                
                key={index}
                img={tarjeta.img}
                titlo={tarjeta.titlo}
                parr={tarjeta.parr}
                />  
        ))}
      
    </div>
  )
}
export default Uniontarjeta
