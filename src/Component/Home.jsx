import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const Home = () => {
  const user = useSelector((state) => state.user)
  return (
    <div className='fixed top-[20vh] flex justify-center w-full '>
      <table className='w-[60%] text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <th className='px-6 py-3'>Name</th>
          <th className='px-6 py-3'>Role</th>
          <th className='px-6 py-3'>Type</th>
          <th className='px-6 py-3'>Delete </th>

        </thead>
        {
          user.map((pro, i) => (
            <tbody cellSpacing="30" >
              <tr className='space-x-10 bg-white border-b'>
                <td className='px-6 py-4'> {pro.name} </td>
                <td className='px-6 py-4'>{pro.role}</td>
                <td className='px-6 py-4'>{pro.type}</td>
                <td>
                  <button>delete employee</button> 
                </td>
              </tr>
            </tbody>
          ))
        }

      </table>
    </div>
  )
}

export default Home;


