import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoLonga from '../assets/layout/Topbar/logo_longa.png';
import logoCurta from '../assets/layout/Topbar/logo_curta.png';
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

export default function Sidebar({ collapsed, openDropdown, handleDropdownToggle, currentTheme}) {
  const [hovering, setHovering] = useState(false);
  const location = useLocation();

  const filtroAzulEscuro = '[filter:invert(74%)_sepia(10%)_saturate(4436%)_hue-rotate(180deg)_brightness(98%)_contrast(85%)]';
  const filtroAzulClaro = '[filter:brightness(35%)_saturate(100%)_invert(27%)_sepia(9%)_saturate(4404%)_hue-rotate(177deg)_brightness(90%)_contrast(86%)]';
  
  return (
    <aside
      className={`
        bg-base-200 p-4 min-h-screen flex flex-col 
        transition-[width,opacity,transform] duration-300 ease-in-out 
        ${collapsed && !hovering ? 'w-20' : 'w-64'}
        `}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >

      {/* Sidebar Header - para a logo */}
      <div className="pb-2 h-12 flex items-center justify-start border-b border-gray-200 dark:border-gray-700">
        {/* Logo Longa - visível quando expandido */}
        <img
          src={logoLonga}
          alt="Logo Longa"
          className={`
            ${currentTheme === 'myLightTheme' ? filtroAzulEscuro : filtroAzulClaro}
            ml-[34px] mb-[6px] scale-140 max-w-full max-h-full object-contain transition-all duration-300 ease-in-out relative delay-50
            ${(!collapsed || hovering) ? 'opacity-100' : 'opacity-0 ml-0 mb-0 w-0' }
          `}
        />
        {/* Logo Curta - visível quando colapsado */}
        <img
          src={logoCurta}
          alt="Logo Curta"
          className={`
            ${currentTheme === 'myLightTheme' ? filtroAzulEscuro : filtroAzulClaro}
            mb-[6px] -ml-2 max-w-full max-h-full object-contain absolute transition-all duration-300 ease-in-out delay-50
            ${(!collapsed || hovering) ? 'opacity-0 scale-50 left-5 top-0' : 'opacity-100 w-[60px]' }
          `}
        />
      </div>

      {/*- lista de navegação */}
      <ul className="menu space-y-2 w-full">
        <h2 className={`mb-2 text-xs uppercase flex leading-[20px] text-gray-400 w-full ${(!collapsed || hovering) ? 'justify-start' : 'ml-[13px]'}`}>
          {(!collapsed || hovering) ? 'Menu' : '...'}
        </h2>
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