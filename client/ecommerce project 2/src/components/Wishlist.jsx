import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

function Wishlist() {

const [list,setlist]=useState([])

  const addWishlist = () => {
    axios.post('http://127.0.0.1:3000/wishlist/addwhishlist', {
      userId,
      productId,
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error('Error adding to wishlist:', error);
      
    });
  };

  useEffect(()=>{
    axios.get('http://127.0.0.1:3000/wishlist/getwhishlist')
      .then((response) => {
        console.log(response.data);
        setlist(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving wishlist:', error);
      })
  },[])
  







  return (
    <div>
  
       wishlist
     </div>
  )
}

export default Wishlist;