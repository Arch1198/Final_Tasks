
import { useState,createContext } from "react";
export const CartContext  = createContext({cartArr:[],addCartData:()=>{},setCartArr:()=>{}})



const CartContextProvider = (props)=>{
    const[cartArr,setCartArr] = useState([]);

    const addCartData = (item) => {
        const updatedValue = [...cartArr,item];
        setCartArr(updatedValue);

        localStorage.setItem("users",JSON.stringify(updatedValue));
        alert(`Item added to cart`);
    };

return (
    <>
        <CartContext.Provider value={{cartArr,addCartData,setCartArr}}>
    {props.Children}
    </CartContext.Provider>
    </>
)

}

export default CartContextProvider;