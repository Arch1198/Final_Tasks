import React, { createContext, useState } from "react";

const DltIcon = createContext();

const DltIconContext = ({ children }) => {
  // the value that will be given to the context
  const [DltIconState, setDltIcon] = useState(false);
  const SelectAllCards = () => {
    if (DltIconState=== false) setDltIcon(true);
    else setDltIcon(false);
  };
  const val={DltIconState,SelectAllCards}
  return (
    // the Provider gives access to the context to its children
    <DltIcon.Provider value={val}>
      {children}
    </DltIcon.Provider>
  );
};

export { DltIcon, DltIconContext};