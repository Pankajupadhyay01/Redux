import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../redux/useSlice'
const Home = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.userList)
  return (
    <div className='fixed top-[20vh] flex justify-center w-full '>
      <table className='w-[60%] text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <th className='px-6 py-3'>Name</th>
          <th className='px-6 py-3'>Role</th>
          <th className='px-6 py-3'>Type</th>
          <th className='px-6 py-3'>Delete </th>

        </thead>
        {user.length == 0?<div className='flex justify-center'>no user exist</div> :
          user.map((pro, i) => (
            <tbody key={i} cellSpacing="30" >
              <tr className='space-x-10 bg-white border-b'>
                <td className='px-6 py-4'> {pro.name} </td>
                <td className='px-6 py-4'>{pro.role}</td>
                <td className='px-6 py-4'>{pro.type}</td>
                <td>
                  <button onClick={()=>dispatch(deleteUser(pro.name))}>delete employee</button> 
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


