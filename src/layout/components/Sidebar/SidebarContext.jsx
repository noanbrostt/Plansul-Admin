import { createContext, useContext } from 'react';

const SidebarContext = createContext(null);

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a SidebarProvider');
  }
  return context;
};

export const SidebarProvider = ({ children, collapsed, hovering, openDropdown, handleDropdownToggle }) => {
  const value = {
    collapsed,
    hovering,
    openDropdown,
    handleDropdownToggle,
  };

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  );
};