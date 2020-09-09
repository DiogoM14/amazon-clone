import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); // Prepara a dataLayer

//  Envolve todo o app e provem o dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Puxa a informação do dataLayer
export const useStateValue = () => useContext(StateContext);
