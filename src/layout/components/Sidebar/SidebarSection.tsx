import React, { useState, useEffect, ReactNode } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useSidebarContext } from './SidebarContext';

interface SidebarSectionProps {
  title: string;
  sectionKey: string;
  children: ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ 
  title, 
  sectionKey,
  children 
}) => {
  // Obtenha o estado do contexto do sidebar
  const { collapsed, hovering } = useSidebarContext();
  
  // Estado para controlar a expansão da seção
  const [isExpanded, setIsExpanded] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`sidebarSection_${sectionKey}`);
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  // Salvar estado no localStorage
  useEffect(() => {
    localStorage.setItem(`sidebarSection_${sectionKey}`, JSON.stringify(isExpanded));
  }, [isExpanded, sectionKey]);

  const toggleSection = () => {
    setIsExpanded(prev => !prev);
  };

  // Determinar o texto a ser exibido com base no estado do sidebar
  const displayText = (!collapsed || hovering) ? title : '...';
  
  return (
    <>
      <li className={`mt-0 mb-0 ${collapsed && !hovering && 'content-center'}`}>
        <div 
          className={`flex items-center justify-between cursor-pointer px-2 py-3 my-1 hover:bg-base-300 rounded-lg transition-colors`}
          onClick={toggleSection}
        >
          <span className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
            {displayText}
          </span>

          {(!collapsed || hovering) && (
            <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
              <FiChevronDown />
            </span>
          )}
        </div>
      </li>
      {isExpanded && (
        <div className="flex flex-col gap-1 pl-[9.5px] [&>:last-child]:mb-4">
          {children}
        </div>
      )}
    </>
  );
};

export default SidebarSection;