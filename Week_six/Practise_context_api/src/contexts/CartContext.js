import { useState,createContext } from "react";
export const DefaultCartContext = createContext({cartArr:[],addCartData:()=>{}})



const CartContextProvider = (props)=>{
    const [cartArr, setCartArr] = useState([]);
  
    const addCartData = (item) => {
        const updatedValue = [...cartArr, item];
        setCartArr(updatedValue);
        localStorage.setItem("users", JSON.stringify(updatedValue));
        alert(` Items added To Cart`);
      };    

      


return (
    <>
    <DefaultCartContext.Provider value={{cartArr,addCartData}}>
        {props.children}
    </DefaultCartContext.Provider>
    </>
)

}

export default CartContextProvider;