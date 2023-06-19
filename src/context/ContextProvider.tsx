import { createContext, useContext, useReducer } from "react";
import storeReducer, { initialValues } from "./storeReducer";

const ListContext = createContext();

const ListProvider = ({ children }) => {
  return (
    <ListContext.Provider value={useReducer(storeReducer, initialValues)}>
      {children}
    </ListContext.Provider>
  );
};

const useStore = () => {
  console.log("contexto", useContext(ListContext));
  return useContext(ListContext)[0];
};
const useDispatch = () => useContext(ListContext)[1];

export { ListContext, useStore, useDispatch };

export default ListProvider;