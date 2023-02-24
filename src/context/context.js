import { Children, createContext, useState } from "react";

export const GlobalData = createContext(null);

const Context = ({ children }) => {
  const [data, setData] = useState({
    isMobileMenuOpen: false,
  });
  return (
    <GlobalData.Provider value={{ data, setData }}>
      {children}
    </GlobalData.Provider>
  );
};

export default Context;
