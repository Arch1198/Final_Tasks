import { useState,createContext } from "react";
export const CartContext = createContext({cartArr:[],addCartData:()=>{},setCartArr:()=>{}})



const CartContextProvider = (props)=>{
    const [cartArr, setCartArr] = useState([]);
  
    const addCartData = (item,showMessage=true) => {
        const updatedValue = [...cartArr, item];
        setCartArr(updatedValue);
        localStorage.setItem("users", JSON.stringify(updatedValue));
        showMessage && alert(` Items added To Cart`);
      };    

      


return (
    <>
    <CartContext.Provider value={{cartArr,addCartData}}>
        {props.children}
    </CartContext.Provider>
    </>
)

}

export default CartContextProvider;