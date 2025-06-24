import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUsers, 
  FiBarChart2, 
  FiSettings, 
  FiChevronDown,
  FiCreditCard,
  FiUser
} from 'react-icons/fi';

//- estrutura de dados atualizada para suportar sub-menus
const navItems = [
  { label: 'Home', to: '/', icon: <FiHome /> },
  { label: 'Usuários', to: '/users', icon: <FiUsers /> },
  { label: 'Relatórios', to: '/reports', icon: <FiBarChart2 /> },

  //- item com sub-menu
  { 
    label: 'Configurações', 
    icon: <FiSettings />, 
    subItems: [
      { label: 'Perfil', to: '/settings/profile', icon: <FiUser /> },
      { label: 'Faturamento', to: '/settings/billing', icon: <FiCreditCard /> },
    ]
  },
];

export default function Sidebar({ collapsed, openDropdown, handleDropdownToggle}) {
  const [hovering, setHovering] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`bg-base-200 p-4 min-h-screen flex flex-col transition-all duration-300 ${
        collapsed && !hovering ? 'w-20' : 'w-64'
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >

      {/*- lista de navegação */}
      <ul className="menu space-y-2 w-full">
        {navItems.map((item) => {
          //- verifica se o item é um dropdown
          if (item.subItems) {
            const isParentActive = item.subItems.some(sub => location.pathname === sub.to);
            return (
              <li key={item.label} className={(!collapsed || hovering) ? '' : 'w-fit'}>
                <div
                  onClick={() => handleDropdownToggle(item.label)}
                  className={`flex items-center justify-between p-2 rounded-lg hover:bg-base-300 cursor-pointer w-full ${isParentActive ? 'bg-base-300' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span>{(!collapsed || hovering) && item.label}</span>
                  </div>
                  {(!collapsed || hovering) && (
                    <span className={`transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`}>
                      <FiChevronDown />
                    </span>
                  )}
                </div>
                {/* renderiza o sub-menu se o dropdown estiver aberto e a sidebar expandida */}
                {openDropdown === item.label && (!collapsed || hovering) && (
                  <ul className="pl-6 pt-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.to}>
                        <Link
                          to={subItem.to}
                          className={`flex items-center gap-3 p-2 rounded-lg hover:bg-base-300 w-full ${
                            location.pathname === subItem.to ? 'bg-primary text-primary-content' : ''
                          }`}
                        >
                          <span className="text-lg">{subItem.icon}</span>
                          <span>{subItem.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }
          
          //- renderiza um link simples
          return (
            <li key={item.to} className={(!collapsed || hovering) ? '' : 'w-fit'}>
              <Link
                to={item.to}
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-base-300 w-full ${
                  location.pathname === item.to ? 'bg-primary text-primary-content' : ''
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {(!collapsed || hovering) && <span>{item.label}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}