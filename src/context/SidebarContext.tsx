import { createContext, ReactNode, useState } from "react";

interface ISidebarContext {
  isSidebarVisible: boolean;
  setIsSidebarVisible: (s: boolean) => void;
}

interface SidebarContextProps {
  children: ReactNode
}

export const SidebarContext = createContext({} as ISidebarContext);

export const SidebarContextProvider = ({ children }: SidebarContextProps) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <SidebarContext.Provider value={{isSidebarVisible, setIsSidebarVisible}}>
      {children}
    </SidebarContext.Provider>
  )
}

