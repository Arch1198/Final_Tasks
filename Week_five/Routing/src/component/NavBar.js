import './index.css'
import {NavLink} from 'react-router-dom'
import ItemList from './ItemName'
function Navbar(props){
  //className="active"
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
  <button >{ItemList.length}</button>

  </header>
</>
)
}
export default Navbar;