import { useEffect } from "react";
import InfoCard from "./InfoCard"
var arr
const Cart = (props) => {
  arr=JSON.parse(localStorage.getItem("users"));
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
}):<><br/><h1>You havn't Added any Item to cart</h1></>}
</div>
    </>
    )
}



export default Cart;