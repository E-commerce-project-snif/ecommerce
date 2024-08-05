import React,{useEffect, useState} from "react";
import axios from 'axios';
import './Users.css'
import { useNavigate } from 'react-router-dom';





const Users = ()=>{
const [users,setusers]=useState([])
const [ref,setref]=useState(false)
const [upuser,setuser]=useState('')

const navigate = useNavigate();


useEffect(()=>{
  axios.get('http://127.0.0.1:3000/users/getall')
.then((response)=>{
  setusers(response.data)
}).catch((err)=>{log(err)})
},[ref])

  
const deleteuser = (id)=>{
  axios.delete(`http://127.0.0.1:3000/users/delete/${id}`)
  .then(()=>{
    setref(!ref)
  }).catch((err)=>{console.log(err);})
}

const updateuser = (id)=>{
  const newuser = { type : upuser }
  axios.put(`http://127.0.0.1:3000/users/update/${id}`,newuser)
  .then(()=>{
    setref(!ref)
  }).catch((err)=>{console.log(err);})
}


const handlebackclick=()=>{
  navigate('/admin')
}


  return (
    <div >
     <div>
     <button class="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back" onClick={()=>{navigate('/admin')}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-blue-300">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
  </svg>
</button>
     </div>
<table style={{
  position:'absolute',
  background: '#012B39',
  borderRadius: '0.25em',
  borderCollapse: "collapse",
  margin: '1em',
  marginLeft :'400px'
}}><tr>
<th>User Id</th>
<th>User Name</th>
<th>User Email</th>
<th>User Type</th>
<th>Delete</th>
<th>Update</th>
</tr>
  {users.map((e,i)=>(
 <tr>
 <td>{e.id}</td>
 <td>{e.name}</td>
 <td>{e.mail}</td>
 <td>{e.type}</td>
 <td><button style={{backgroundColor:'#E2B842'}} onClick={()=>{deleteuser(e.id)}} >delete</button></td>
 <td><button onClick={()=>{updateuser(e.id)}} style={{backgroundColor:'#E2B842'}}>update</button><input style={{border :'1px solid black'}} type="text" placeholder="type here" onChange={(e)=>{setuser(e.target.value)}} /></td>
 
</tr>


  ))}
 
 
 
</table>
</div>
  )
}

export default Users 

