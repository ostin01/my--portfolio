import { createContext, useContext, useState } from "react";

const stateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [toggle, settoggle] = useState(false);
  const handleClick = () => {
    settoggle((toggle) => !toggle);
  };
  let stateCheck = toggle ? "show " : "hide";
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <stateContext.Provider
      value={{
        theme,
        toggleTheme,
        stateCheck,
        handleClick,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateValue = () => useContext(stateContext);
