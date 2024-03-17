import { createContext, useState, useContext } from "react";
import { getThem } from "../utils";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [theme, setTheme] = useState(getThem());
  const toggle = () => {
    setAnimation(!animation);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const themeTogg = (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const updateData = (newData) => {
    const updated = { ...data, ...newData };
    setData(updated);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        animation,
        toggle,
        themeTogg,
        theme,
        data,
        setData,
        updateData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
