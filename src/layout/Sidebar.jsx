import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiHome, FiUsers, FiBarChart2 } from 'react-icons/fi';

const navItems = [
  { label: 'Home', to: '/', icon: <FiHome /> },
  { label: 'Usuários', to: '/users', icon: <FiUsers /> },
  { label: 'Relatórios', to: '/reports', icon: <FiBarChart2 /> },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`bg-base-200 p-4 min-h-screen flex flex-col transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Botão de colapsar/expandir */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="btn btn-sm btn-ghost"
        >
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* Lista de navegação */}
      <ul className="menu space-y-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`flex items-center gap-3 p-2 rounded-lg hover:bg-base-300 ${
                location.pathname === item.to ? 'bg-primary text-primary-content' : ''
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
