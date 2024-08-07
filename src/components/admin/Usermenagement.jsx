import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Usermenagement() {
  const [keyword , setKeyword] = useState('')
  const [users , setUser] = useState([])
  
  const getUser = async () => {
    let result = await axios.get('http://localhost:4000/auth/users?keyword=' + keyword)
    setUser(result.data.data)
  }

  useEffect(()=>{
    getUser()
  })

  return (
    <>
    <div className="flex justify-between items-center mb-4">
        <header className="md:text-4xl"> User Management </header> 
        <a href="/register" className="btn max-md:btn-sm btn-success text-white">New User</a>
    </div>
    <div className="w-full bg-white shadow-lg p-5 rounded-lg">
        <div className="flex justify-between text-xl">
            <span>User Table</span>
            <label> 
                <span className="max-md:hidden">search :</span>
                <input 
                type="text" 
                placeholder="Enter your text" 
                className="text-center border rounded mb-5 ml-2 text-sm p-1" 
                onChange={(e)=>{
                    setKeyword(e.target.value)
                }}
                value={keyword}
                />
            </label>
        </div>
    <div className="overflow-x-auto">
        <table className="table max-md:table-xs rounded bg-gray-300">
        <thead>
        <tr>
            <th>firstname</th>  
            <th>lastname</th> 
            <th>level</th>
        </tr>
        </thead> 
        <tbody>
            {   
                users.map((user , index)=>{
                    return(
                        <tr key={index}  className="bg-white hover hover:cursor-pointer">
                            <td>{user.firstname}</td> 
                            <td>{user.lastname}</td> 
                            <td>{user.level === 2 ? 'admin' : 'user' }</td> 
                        </tr>
                    );
                })
            }
        </tbody> 
        </table>
    </div>
    </div>
</>
  )
}
