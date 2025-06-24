import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  
  const handleDropdownToggle = (label) => {
    //- se o dropdown clicado já estiver aberto, fecha. Senão, abre.
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        openDropdown={openDropdown}
        handleDropdownToggle={handleDropdownToggle}
      />
      <div className="flex flex-col flex-1">
        <Topbar
          onToggleSidebar={toggleSidebar} // Renomeado para clareza no Topbar
          collapsed={collapsed}
          setOpenDropdown={setOpenDropdown} // Passando setOpenDropdown para o Topbar!
        />
        <main className="p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
