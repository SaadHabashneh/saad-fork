import React, { useState,useEffect } from 'react'
import axios from 'axios'
import "./Main.css"
const Main = () => {
  const [usersAll, setUsersAll] = useState("")
  useEffect(()=>{
    axios.get("http://localhost:5000/users/")
    .then((results)=>{
      console.log(results.data.results);
      setUsersAll(results.data.results)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <div className='MainDev'>Main
    {usersAll?<div>{usersAll.map(user=>{
      console.log(user);
      <div>
      <div>{user.id}</div>
        <div>{user.lastname}</div>
        <div>{user.email}</div>
        </div>
      
    })}</div>:<></>}
    </div>
  )
}

export default Main