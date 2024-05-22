import React from 'react'
import logo from "../Images/Blanco.png";

const Footer = () => {
  return (
    <div className='w-auto bg-black absolute inset-x-0 bottom-0 h-auto'>
        <div className='flex flex-row justify-center items-center'>
            <div className='text-white basis-1/3 flex flex-col gap-1'>
                <div className='font-bold text-center'>CONTACTANOS:</div>
                <div className='text-center'>+5692345678</div>
                <div className='text-center'>airwatch@gmail.com</div>
            </div>
            <div className='text-white py-5 basis-1/3 flex justify-center'>
                <div className='flex flex-col'>
                    <img className='h-20' src={logo} alt="logo" />
                    <div className='font-extralight flex justify-center text-xs '>Copyright © AirWatch Inc.</div>
                </div>
                
            </div>
            <div className='text-white basis-1/3 flex justify-center'>
                <div className='font-bold flex justify-center'>REDES SOCIALES:</div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer

