import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




const Category =()=>{
const [ref,setref]=useState(false)
const [cat,setcat] = useState([])
const [upcat,setupact] = useState([])
const [addcat,setaddcat] = useState([])

const navigate = useNavigate();


useEffect(()=>{
    axios.get('http://127.0.0.1:3000/categories/getcat')
    .then((response)=>{
        console.log(response);
        setcat(response.data.categories)

    }).catch((err)=>{console.log(err);})
},[ref])

const handlebackclick=()=>{
    navigate('/admin')
}

const handleupdate = (x)=>{
const updated = {categoryName : upcat}
    axios.put(`http://127.0.0.1:3000/categories/update/${x}`,updated)
    .then((response)=>{
        console.log(response);
        setref(!ref)  
        })
       
    .catch((err)=>{console.log(err)})
}
const  add = ()=>{
    const cat = {categoryName:addcat}
        axios.post(`http://127.0.0.1:3000/categories/addcat`,cat)
        .then(()=>{
            setref(!ref)  
            })
           
        .catch((err)=>{console.log(err)})
    }

    return(
        <div>
            <div>
            <button class="cursor-pointer duration-200 hover:scale-125 active:scale-100" title="Go Back" onClick={()=>{navigate('/admin')}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" class="stroke-blue-300">
    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
  </svg>
</button>
            </div>
             <div style={{marginTop:'20px' , marginLeft :'41%'}}>
            <input type="text"placeholder="Type To Add Category" onChange={(e)=>{setaddcat(e.target.value)}} />
            <button style={{backgroundColor:'black',width:'80px' ,color :'white',marginLeft:'45px'}} onClick={add}>Add</button>
        </div>
        <div style={{width:'600px' ,height : '800px', marginLeft:'35%'}}>
        <table>
            <tr>
                <th>Category Name</th>
                <th></th>
            </tr>
            {cat.map((e,i)=>(
                <tr>
                <td >{e.categoryName}</td>
                <td><button style={{backgroundColor:'#E2B842'}}  onClick={()=>{handleupdate(e.id)}}> Click To Update </button> <input type="text" placeholder="type here" onChange={(e)=>{setupact(e.target.value)}} /></td>
                </tr>
                
            ))}
        </table>
       
        </div>
        </div>
    )
}

export default Category