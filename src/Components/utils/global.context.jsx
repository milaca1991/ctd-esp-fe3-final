import { createContext , useState, useMemo} from "react";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // const [state, setState] = useState(initialState);

  // const toggleTheme = () => {
  //   setState(prevState => ({
  //     ...prevState,
  //     theme: prevState.theme === "light" ? "dark" : "light"
  //   }));
  // };

  // const contextValue = useMemo(() => {
  //   return {
  //     state,
  //     toggleTheme
  //   };
  // }, [state]);


  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
