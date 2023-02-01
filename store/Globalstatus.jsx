import { useReducer, useState } from 'react';
import {createContext} from 'react';
import { reducers } from './Reducers';
import questions from '../data/data';

export const DataContext = createContext();

 const DataProvider = ({children}) => {
     const inicialState = {questions, current:0, isNotFinal: true, 
     correctCount:0, wrongCount:0};
     const [status, dispatch] = useReducer(reducers, inicialState);
     return (
        <DataContext.Provider value={[status, dispatch]}>
            {children}
        </DataContext.Provider>
     )
}
export default DataProvider;