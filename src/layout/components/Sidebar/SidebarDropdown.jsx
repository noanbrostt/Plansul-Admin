import { Link, useLocation } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { useSidebarContext } from './SidebarContext';

// Recebe props individuais em vez de um objeto 'item'
export default function SidebarDropdown({ label, icon, subItems }) {
  const { collapsed, hovering, openDropdown, handleDropdownToggle } = useSidebarContext();
  const location = useLocation();
  const isParentActive = subItems.some(sub => location.pathname === sub.to);
  const isOpen = openDropdown === label;

  return (
    <li className={(!collapsed || hovering) ? '' : 'w-fit'}>
      <div
        onClick={() => handleDropdownToggle(label)}
        className={`flex items-center justify-between p-2 rounded-lg hover:bg-base-300 cursor-pointer w-full 
          ${isParentActive ? 'bg-base-300' : ''}
          ${(!collapsed || hovering) ? '' : ' -mr-[11px]'}
        `}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{icon}</span> {/* Usar 'icon' diretamente */}
          <span>{(!collapsed || hovering) && label}</span> {/* Usar 'label' diretamente */}
        </div>
        {(!collapsed || hovering) && (
          <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <FiChevronDown />
          </span>
        )}
      </div>
      {isOpen && (!collapsed || hovering) && (
        <ul className="pl-6 pt-2 space-y-1">
          {subItems.map((subItem) => ( // Usar 'subItems' diretamente
            <li key={subItem.to}>
              <Link
                to={subItem.to}
                className={`flex items-center gap-3 p-2 rounded-lg hover:bg-base-300 w-full 
                  ${location.pathname === subItem.to ? 'bg-primary text-primary-content' : ''}
                `}
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