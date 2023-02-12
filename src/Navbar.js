import React from 'react'
import "./Navbar.css"
import { useState,useEffect } from 'react'
function Navbar() {
const[show,handleShow]=useState(false)
useEffect(
    ()=>
    {
/// to  check wheather the event is happened or not
window.addEventListener('scroll',()=>{
    if(window.scrollY>450)
    {
        handleShow(true)
    }
    else{
        handleShow(false)
    }
})
},[]
)
console.log(show);
  return (
    <div className={`nav ${show && 'nav_black'}`}>       
           <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'   />
    </div>
  )
}

export default Navbar