import './index.css'
function Navbar(){
return(
<>
<header className="head">
    <h1>My Shop</h1>
    <ul className="nav">
    <li className="active">Home</li>
    <li>Search</li>
    <li>Shop</li>
    <li>About</li>
    </ul>
  <button>wishlist</button>
  <button>Cart</button>
  </header>
</>
)
}
export default Navbar;