import { useReducer } from 'react';
import {createContext} from 'react';

export const DataContext = createContext();

 const DataProvider = ({children}) => {
     const inicialState = {}
     const [status, dispatch] = useReducer()
     return (
        <DataContext.Provider value={[status, dispatch]}>
            {children}
        </DataContext.Provider>
     )
}
export default DataProvider;