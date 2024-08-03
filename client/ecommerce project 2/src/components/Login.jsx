import React ,{useState}from "react";
import axios from'axios'
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const [mail,setmail]=useState('')
  const [password,setapassword]=useState('')
  const navigate = useNavigate();


  const handlelog =()=>{
    const user = {mail : mail , password : password}
    axios.post('http://127.0.0.1:3000/users/login',user)
    .then((response)=>{
      console.log(response);
      console.log('success');
      if(mail==='admin@gmail.com'){
        navigate('/admin')
        localStorage.setItem('token', response.data.token)
        console.log(localStorage);
      }
      if(response.data.users.type==='client'){
        localStorage.setItem('token', response.data.token)
      }
      else{
        localStorage.setItem('token', response.data.token)
      }
    })
    .catch((err)=>{console.log(err)})
  }


  return (
    <div className="w-full  flex items-center justify-center gap-16 bg-white">
      {/* <div className="w-80 h-80 bg-red-600"></div> */}
      <img
        style={{ width: "600px", height: "450px" }}
        className="w-80 h-80 bg-red-600"
        src="https://www.chilliapple.co.uk/blog/app/uploads/2023/03/chilliapple-Blog-Image-benefits-of-Having-Mobile-App-for-eCommerce-Business.jpg"
      />
      <div className="flex flex-col w-60 gap-5">
        <h3 className="font-medium text-2xl">Create an account</h3>
        <span className="font-small">Enter your detail below</span>

        <input
          placeholder="Email or phone number"
          className="w-70 h-70 border-b-2 border-grey outline-none"
          onChange={(e)=>{setmail(e.target.value)}}
        />
        <input
        type = 'password'
          placeholder="Password"
          className="w-70 h-70 border-b-2 border-grey outline-none"
          onChange={(e)=>{setapassword(e.target.value)}}
        />
        <button className="bg-red-600 text-white text-base p-2"  onClick={handlelog}>
         Log in
        </button>
      </div>
      
     
    </div>
  );
}

export default SignUp;
