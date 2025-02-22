import React from 'react'
import { Banner1,Banner2,Banner3,Banner4 } from '../images'
const images=[Banner1,Banner2,Banner3,Banner4]
function Header({title , image, type}) {
  return (
   <div className='w-full h-[100vh]'>
     <div className='relative w-full h-full'>
        <img src={image ?? images[Math.floor(Math.random()*images.length)]} alt="images"
        className='w-full h-full object-cover' />
     </div>
     <div className='absolute w-full h-full bg-gradient-to-t from-black
     to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40
     2xl:pt-20 px-4'>

     <h1 className='text-white md:text-5xl text-4xl font-bold text-center'>{title}</h1>
     {
        type && (
            <p
            className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full'>welcome to this application 
        , your passport to culinary adventures
        <br  className='hidden md:block'/>
          Discover a teresure trove of recipes around the globe
        </p>
        
        )
     }
     </div>
   </div>
  )
}

export default Header