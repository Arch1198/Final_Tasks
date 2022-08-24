import React, { createContext, useState, useEffect } from "react";


const ProdContext = createContext();

const ProdContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [prodList, setProdList] = useState([]);
  const [spinState,setSpinState]=useState(true)
  useEffect(()=>{
        setSpinState(true)
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProdList(data)
            setSpinState(false)
        })

  },[setProdList])
  var val={prodList,spinState}
  return (
    <ProdContext.Provider value={val}>
      {children}
    </ProdContext.Provider>
  );
};

export { ProdContext, ProdContextProvider };