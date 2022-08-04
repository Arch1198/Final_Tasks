import './index.css'
function Navbar(props){
return(
<>
<header className="head" >
    <h1>My Shop</h1>
    <ul className="nav">
    <li className="active">Home</li>
    <li>Search</li>
    <li>Shop</li>
    <li>About</li>
    </ul>
  <button onClick={()=>{
    if(props.wishlistv===false)
   props.wishlistvisble(true)
   else
   props.wishlistvisble(false)
  }}>wishlist{props.whilistCount}</button> 
  <button >{props.countitem}</button>

  </header>
</>
)
}
export default Navbar;