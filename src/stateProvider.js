import React, { createContext, useContext, useReducer } from "react";

//create or prepare the data layer
export const StateContext = createContext();

//wraps the app and provides the datalayer to other components
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pulls information from the data layer
export const useStateValue = () => useContext(StateContext);