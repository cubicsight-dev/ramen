
import { Children, createContext, useContext, useState } from "react";

export const GlobalDataContext = createContext({
    globalData: undefined,
    setGlobalData: async (data) => null
});

export const useGlobalData = () => useContext(GlobalDataContext)

const Context = ({ children }) => {
    const [globalData, setGlobalData] = useState({
        company: {},
    });
    return (
        <GlobalDataContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GlobalDataContext.Provider>
    );
};

export default Context;
