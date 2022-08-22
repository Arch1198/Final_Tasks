
import { useContext } from "react"
import CartContextProvider, { CartContext } from "../contexts/CartContextProvider"
import InfoCard from "./InfoCard"
var arr
const Cart = (props) => {
  // arr=JSON.parse(localStorage.getItem("users"));
  const {cartArr=[]}=useContext(CartContext)
  const arr=cartArr
 console.log({arr});
return (
    <>
<h1>Cart</h1>
<div style={{
  width:"100vw",
  height:"100vh",
  display:"flex",
  flexDirection:"row",
  flexWrap:"wrap"
}}>
{arr!=null?arr.map((val,index)=>{
  return(
  <InfoCard 
  item={val}
  key={index}
  />
  )
}):<><br/><h3>You havn't Added any Item to cart</h3></>}
</div>
    </>
    )
}



export default Cart;