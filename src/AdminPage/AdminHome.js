
import SideBar from './SideBar'
import Home from './Home'
import React, { useState } from 'react';


 function AdminHome (){

    const [toggle,setToggle] = useState(true)
    const Toggle = () =>{
      setToggle(!toggle)
    }
  return (
    <div>
     <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
       {toggle &&<div className='col-4  col-md-2 bg-white vh-100 ' >
       <SideBar/>
       </div>}
      { toggle && <div className='col-4 col-md-2'></div>}
       <div className='col'>
       <Home  Toggle={Toggle}/>
       </div>
  
      </div>
    </div>    
    </div>
  )
}

export default AdminHome
