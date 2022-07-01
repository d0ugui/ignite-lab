import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { Logo } from "./Logo";

export function Header() {
  const { isSidebarVisible, setIsSidebarVisible } = useContext(SidebarContext);

  function handleToggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible)
  }

  return (
    <header className="w-full py-3 lg:py-5 px-6 flex items-center justify-between 
      lg:justify-center lg:px-0 bg-gray-700 border-b border-gray-600"
    >
      <Logo />

      <div className="flex items-center lg:hidden">
        <span>Aulas</span>
        {isSidebarVisible ? (
          <>
            <div>
              <svg 
                className="h-8 w-8 text-blue-500"  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="currentColor"  
                stroke-width="2"  
                stroke-linecap="round"  
                stroke-linejoin="round"
                onClick={handleToggleSidebar}
              >
                <line x1="18" y1="6" x2="6" y2="18" />  
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </>
        ) : (
          <div 
            className="space-y-2 ml-2" 
            onClick={handleToggleSidebar}
          >
            <div className="w-8 h-0.5 bg-blue-500"></div>
            <div className="w-8 h-0.5 bg-blue-500"></div>
            <div className="w-8 h-0.5 bg-blue-500"></div>
          </div>
        )}
      </div>
    </header>
  );
}
