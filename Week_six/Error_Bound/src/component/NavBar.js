import './index.css'
import {NavLink} from 'react-router-dom'
import ItemList from './ItemName'
import { useState } from 'react'
import { useEffect } from 'react'
function Navbar(props){
  //className="active"
const [totalItem,setTotalItem]=useState(ItemList.length)
useEffect(()=>{
  setTotalItem(ItemList.length)
})
return(
<>
<header className="head" >
    <h1>My Shop</h1>
    <ul className="nav">
    <li ><NavLink activeClassName="active" to="/" style={{color:"black",textDecoration:"none"}}>Home</NavLink></li>
    <li><NavLink activeClassName="active" to="/shop" style={{color:"black",textDecoration:"none"}}>Shop</NavLink></li>
    <li><NavLink activeClassName="active" style={{color:"black",textDecoration:"none"}}  to="/cart">Cart</NavLink></li>
    <li><NavLink activeClassName="active"  to="/admin" style={{color:"black",textDecoration:"none"}}>Admin</NavLink></li>
    </ul>
  <button onClick={()=>{
    if(props.wishlistv===false)
   props.wishlistvisble(true)
   else
   props.wishlistvisble(false)
  }}>wishlist</button> 
  <button >{totalItem}</button>

  </header>
</>
)
}
export default Navbar;