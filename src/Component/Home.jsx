import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const Home = () => { 
  const users = useSelector((state)=>state.user)  
  return (
    <div className='fixed top-[20vh]'>
     
      <li>
        {users.user.name} 
      </li>


  
      
    </div>
  )
}

export default Home;

 
