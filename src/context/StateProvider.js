import React, { useContext, createContext, useReducer } from 'react';

// Prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
}

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);