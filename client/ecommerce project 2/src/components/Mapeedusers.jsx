import React from "react";


const Mappedusers = ({id,name,mail,type})=>{
    return (
        <div >
        <div style={{border :'1px solid black' , width :'300px'}}>
          <p>
          {id}
          </p>
         
        </div>
        <div style={{border :'1px solid black' , width :'300px'}}>
          <p>  {name} </p>
          
        </div>
        <div style={{border :'1px solid black' , width :'300px'}}>
          <p>  {mail}  </p>
        </div>
        <div style={{border :'1px solid black' , width :'300px'}}>
          <p>   {type} </p>
        </div>
        
        
            </div>
    )
}

export default Mappedusers