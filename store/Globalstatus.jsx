import { useReducer } from 'react';
import {createContext} from 'react';
import { reducers } from './Reducers';

export const DataContext = createContext();

 const DataProvider = ({children}) => {
     const inicialState = {}
     const [status, dispatch] = useReducer(reducers, inicialState)
     return (
        <DataContext.Provider value={[status, dispatch]}>
            {children}
        </DataContext.Provider>
     )
}
export default DataProvider;